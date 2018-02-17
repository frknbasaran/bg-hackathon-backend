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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status',
        // constant value of statuses.PENDING
        default: "5a878d1e012dd9f43a7ec793"
    }
});

export default Deal;