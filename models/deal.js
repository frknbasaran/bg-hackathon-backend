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
    },
    sent_from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sent_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default Deal;