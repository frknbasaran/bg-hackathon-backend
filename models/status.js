import mongoose from 'mongoose';

mongoose.Promise = Promise;

const Status = new mongoose.Schema({
    name: String
});

export default Status;