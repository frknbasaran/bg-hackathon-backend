import DealSchema from '../models/deal';
import Database from '../utils/connection';
import Response from "../utils/response";

const Deal = Database.model('Deal', DealSchema);

export default {
    // Get all deals by the filter which provided on query string
    // or without filter
    getAll: async (ctx) => {
        try {
            // @queryParam: t, representing travel
            // @queryParam: p, representing pack
            // @queryParam: u, representing user
            // @queryParam: s, representing sort, order by created_at,
            let query = {};
            let sort = {};
            sort[ctx.request.query.sk || "created_at"] = ctx.request.query.sv || 1;
            if (ctx.request.query.t) query["travel"] = ctx.request.query.t;
            if (ctx.request.query.p) query["pack"] = ctx.request.query.p;
            if (ctx.request.query.u) query["created_by"] = ctx.request.query.u;
            // return query result
            let results = await Deal.find(query).sort(sort).populate('travel pack');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one deal by the _id parameter
    getOne: async (ctx) => {
        try {
            let results = await Deal.findOne({"_id": ctx.params.id}).populate('travel pack');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    create: async (ctx) => {
        try {
            const newDeal = new Deal();

            newDeal.travel = ctx.request.body.travel;
            newDeal.pack   = ctx.request.body.pack;

            ctx.body = Response.ok(await newDeal.save());
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}