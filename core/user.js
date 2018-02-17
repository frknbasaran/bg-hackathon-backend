import UserSchema from '../models/User';
import Database from '../utils/connection';
import Response from '../utils/response';

const User = Database.model('User', UserSchema);

export default {
    // Get all users by the filter which provided on query string
    // or without filter
    "getAll": async (ctx) => {
        try {
            // return query result with filter
            // @queryParam: u, representing username
            if (ctx.request.query.u) {
                let results = await User.find({username: ctx.request.query.u});
                ctx.body = Response.ok(results);
            }
            // return query result without filter, literally "all" users
            else {
                let results = await User.find({});
                ctx.body = Response.ok(results);
            }
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    },
    // Get one user by the _id parameter
    "getOne": async (ctx) => {
        try {
            let results = await User.findOne({"_id": ctx.params.id}).select('name username photo');
            ctx.body = Response.ok(results);
        } catch (DatabaseError) {
            ctx.status = DatabaseError.status || 500;
            ctx.body = Response.error(DatabaseError);
        }
    }
}