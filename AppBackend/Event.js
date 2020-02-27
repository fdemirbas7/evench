import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: Number
  },
  price: {
    type: Number
  },
  location: {
    type: String
  },
  date: {
    type: String
  }
});

const Event = mongoose.model('Event', schema);
export default Event;