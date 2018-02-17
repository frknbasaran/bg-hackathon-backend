import mongoose from 'mongoose';

mongoose.Promise = Promise;

const Travel = new mongoose.Schema({
    date: Date,
    from: String,
    to: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    weight: Number
});

export default Travel;