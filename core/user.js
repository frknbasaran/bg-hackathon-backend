import UserSchema from '../models/user';
import Database from '../utils/connection';
import Response from '../utils/response';

const User = Database.model('User', UserSchema);

export default {
    // Get all users by the filter which provided on query string
    // or without filter
    getAll: async (ctx) => {
        try {
            let query = {};
            // return query result with filter
            // @queryParam: u, representing username
            if (ctx.request.query.u) query["username"] = ctx.request.query.u;
            let sort = {};
            sort[ctx.request.query.sk || "created_at"] = ctx.request.query.sv || 1;
            let results = await User.find(query).sort(sort);
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one user by the _id parameter
    getOne: async (ctx) => {
        try {
            let results = await User.findOne({"_id": ctx.params.id}).select('name username photo reputation');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}