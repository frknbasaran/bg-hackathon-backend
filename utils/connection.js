import Mongoose from 'mongoose';
import DotEnv from 'dotenv';

DotEnv.config();

export default Mongoose.createConnection(process.env.DEV_DB_URL)