import RequestSchema from '../models/Request';
import Database from '../utils/connection';

const Request = Database.model('Request', RequestSchema);

export default {

}