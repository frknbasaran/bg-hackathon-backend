import mongoose from 'mongoose';
import md5 from 'md5';

mongoose.Promise = Promise;

const User = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    registered_at: {
        type: Date,
        default: Date.now()
    },
    reputation: {type: Number, default: 0},
    photo: String
});

export default User;