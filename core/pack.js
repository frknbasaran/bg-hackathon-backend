import PackSchema from '../models/pack';
import Database from '../utils/connection';
import Response from "../utils/response";

const Pack = Database.model('Pack', PackSchema);

export default {
    // Get all packs by the filter which provided on query string
    // or without filter
    getAll: async (ctx) => {
        try {
            // @queryParam: f, representing from
            // @queryParam: t, representing to
            // @queryParam: w, representing weight
            // @queryParam: u, representing user
            // @queryParam: sk, representing sort, sorting key, desc&asc
            // @queryParam: sv, representing sort, sorting val, desc&asc
            let query = {};
            let sort = {};
            sort[ctx.request.query.sk || "created_at"] = ctx.request.query.sv || -1;
            if (ctx.request.query.f) query["from"] = ctx.request.query.f;
            if (ctx.request.query.t) query["to"] = ctx.request.query.t;
            if (ctx.request.query.w) query["weight"] = {$lte: ctx.request.query.w};
            if (ctx.request.query.u) query["user"] = ctx.request.query.u;
            query["status"] = "ACTIVE";
            // return query result
            let results = await Pack.find(query).populate('user', 'name photo reputation').sort(sort);
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one pack by the _id parameter
    getOne: async (ctx) => {
        try {
            let results = await Pack.findOne({"_id": ctx.params.id}).populate('user', 'name photo reputation');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    create: async (ctx) => {
        try {
            const newPack = new Pack();

            newPack.from = ctx.request.body.from;
            newPack.to = ctx.request.body.to;
            newPack.user = ctx.request.body.user;
            newPack.weight = ctx.request.body.weight;

            ctx.body = Response.ok(await newPack.save());
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}