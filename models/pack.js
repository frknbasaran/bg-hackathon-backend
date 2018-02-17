import mongoose from 'mongoose';

mongoose.Promise = Promise;

const Pack = new mongoose.Schema({
    weight: Number,
    from: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    to: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'ACTIVE'
    }
});

export default Pack;