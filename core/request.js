import RequestSchema from '../models/request';
import DealSchema from '../models/deal';
import TravelSchema from '../models/travel';
import PackSchema from '../models/pack';
import Database from '../utils/connection';
import Response from "../utils/response";

const Request = Database.model('Request', RequestSchema);
const Deal = Database.model('Deal', DealSchema);
const Travel = Database.model('Travel', TravelSchema);
const Pack = Database.model('Pack', PackSchema);

export default {
    // Get all requests by the filter which provided on query string
    // or without filter
    getAll: async (ctx) => {
        try {
            // @queryParam: t, representing travel
            // @queryParam: p, representing pack
            let query = {};
            if (ctx.request.query.p) query["pack"] = ctx.request.query.p;
            if (ctx.request.query.t) query["travel"] = ctx.request.query.t;
            let sort = {};
            sort[ctx.request.query.sk || "created_at"] = ctx.request.query.sv || 1;
            //if (ctx.request.query.u) query = {$and: [query, {$or: [{"pack.user": ctx.request.query.u}, {"travel.user": ctx.request.query.u}]}]};
            // return query result
            let results = await Request.find(query)
                .populate('pack travel user')
                .sort(sort);

            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one pack by the _id parameter
    getOne: async (ctx) => {
        try {
            let results = await Request.findOne({"_id": ctx.params.id})
                .populate('pack travel user');

            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    create: async (ctx) => {
        try {
            const newRequest = new Request();

            newRequest.travel = ctx.request.body.travel;
            newRequest.pack = ctx.request.body.pack;

            ctx.body = Response.ok(await newRequest.save());
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    /*
    * When user approved or rejected the request
    */
    update: async (ctx) => {
        try {
            let request = await Request.findOne({"_id": ctx.request.params.id});
            request.status = ctx.request.body.status;
            let updatedRequest = request.save()
            // when request approved
            // create deal from it
            if (request.status == "APPROVED") {
                // set disable related pack and travel
                // hide from list api results
                let relatedTravel = Travel.findOne({_id: request.travel});
                relatedTravel.status = "DISABLED";
                await relatedTravel.save();

                let relatedPack = Pack.findOne({_id: request.pack});
                relatedPack.status = "DISABLED";
                await relatedPack.save();

                let newDeal = new Deal();
                newDeal.travel = request.travel;
                newDeal.pack = request.pack;
                Response.ok(await newDeal.save());

            } else Response.ok(updatedRequest);
        }
        catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}