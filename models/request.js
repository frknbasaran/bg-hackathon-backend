import mongoose from 'mongoose';
import deepPopulate from 'mongoose-deep-populate';

const DeepPopulate = deepPopulate(mongoose);

mongoose.Promise = Promise;

const Request = new mongoose.Schema({
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
        default: 'PENDING'
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

Request.plugin(DeepPopulate, {
    populate: {
        'pack.user': {
            select: 'name username photo'
        },
        'travel.user': {
            select: 'name username photo'
        }
    }
});

export default Request;