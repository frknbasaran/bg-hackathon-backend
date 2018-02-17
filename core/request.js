import RequestSchema from '../models/Request';
import Database from '../utils/connection';
import Response from "../utils/response";

const Request = Database.model('Request', RequestSchema);

export default {
    // Get all requests by the filter which provided on query string
    // or without filter
    "getAll": async (ctx) => {
        try {
            // @queryParam: t, representing travel
            // @queryParam: p, representing pack
            let query = {};
            if (ctx.request.query.p) query["pack"] = ctx.request.query.pack;
            if (ctx.request.query.t) query["travel"] = ctx.request.query.travel;
            let sort = {};
            sort[ctx.request.query.sk || "created_at"] = ctx.request.query.sv || 1;
            // return query result
            let results = await Request.find(query).populate('pack travel user').sort(sort);
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one pack by the _id parameter
    "getOne": async (ctx) => {
        try {
            let results = await Request.findOne({"_id": ctx.params.id}).populate('pack travel user');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    "create": async (ctx) => {
        try {
            const newRequest = new Request();

            newRequest.travel = ctx.request.body.travel;
            newRequest.pack = ctx.request.body.pack;

            ctx.body = Response.ok(await newRequest.save());
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}