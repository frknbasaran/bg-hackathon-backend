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
            // @queryParam: st, sent_to, target user of request
            // @queryParam: sf, sent_from, sender user of request
            let query = {};
            if (ctx.request.query.p) query["pack"] = ctx.request.query.p;
            if (ctx.request.query.t) query["travel"] = ctx.request.query.t;
            if (ctx.request.query.sf) query["sent_from"] = ctx.request.query.sf;
            if (ctx.request.query.st) query["sent_to"] = ctx.request.query.st;
            let sort = {};
            sort[ctx.request.query.sk || "created_at"] = ctx.request.query.sv || 1;
            // return query result
            let results = await Request.find(query)
                .populate('pack travel sent_from sent_to')
                .deepPopulate('pack.user travel.user')
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
                .populate('pack travel user')
                .deepPopulate('pack.user travel.user');
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
            newRequest.sent_from = ctx.request.body.sent_from;
            newRequest.sent_to = ctx.request.body.sent_to;

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
            let request = await Request.findOne({"_id": ctx.params.id});
            request.status = ctx.request.body.status;
            let updatedRequest = await request.save()
            // when request approved
            // create deal from it
            if (request.status == "APPROVED") {
                // set disable related pack and travel
                // hide from list api results
                let relatedTravel = await Travel.findOne({_id: request.travel});

                relatedTravel.status = "DISABLED";
                await relatedTravel.save();

                let relatedPack = await Pack.findOne({_id: request.pack});
                relatedPack.status = "DISABLED";
                await relatedPack.save();

                let newDeal = new Deal();
                newDeal.travel = request.travel;
                newDeal.pack = request.pack;
                newDeal.user = ctx.request.body.user;
                let savedDeal = await newDeal.save();
                ctx.body = await Response.ok(savedDeal);

            } else await Response.ok(updatedRequest);
        }
        catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}