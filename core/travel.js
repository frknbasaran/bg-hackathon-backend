import TravelSchema from '../models/Travel';
import Database from '../utils/connection';

const Travel = Database.model('Travel', TravelSchema);

export default {

}