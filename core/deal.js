import DealSchema from '../models/Deal';
import Database from '../utils/connection';

const Deal = Database.model('Deal', DealSchema);

export default {

}