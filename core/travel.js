import TravelSchema from '../models/Travel';
import Database from '../utils/connection';
import Response from "../utils/response";

const Travel = Database.model('Travel', TravelSchema);

export default {
    // Get all travels by the filter which provided on query string
    // or without filter
    "getAll": async (ctx) => {
        try {
            // @queryParam: f, representing from
            // @queryParam: t, representing to
            // @queryParam: w, representing weight
            // @queryParam: u, representing user
            let query = {};
            if (ctx.request.query.f) query["from"] = ctx.request.query.f;
            if (ctx.request.query.t) query["to"] = ctx.request.query.t;
            if (ctx.request.query.w) query["weight"] = {$gte: ctx.request.query.w};
            if (ctx.request.query.u) query["user"] = ctx.request.query.u;
            // return query result
            let results = await Travel.find(query).populate('user','name photo reputation');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one travel by the _id parameter
    "getOne": async (ctx) => {
        try {
            let results = await Travel.findOne({"_id": ctx.params.id}).populate('user');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    "create": async (ctx) => {
        try {
            const newTravel = new Travel();

            newTravel.from = ctx.request.body.from;
            newTravel.to = ctx.request.body.to;
            newTravel.user = ctx.request.body.user;
            newTravel.weight = ctx.request.body.weight;

            ctx.body = Response.ok(await newTravel.save());
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}