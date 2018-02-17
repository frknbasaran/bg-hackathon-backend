import mongoose from 'mongoose';

mongoose.Promise = Promise;

const Deal = new mongoose.Schema({
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel'
    },
    pack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pack'
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "WAITING"
    }
});

export default Deal;