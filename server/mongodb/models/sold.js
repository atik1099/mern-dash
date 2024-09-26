import mongoose from 'mongoose';

const SoldSchema = new mongoose.Schema({
  title: { type: String },

})

const soldModel = mongoose.model('Sold', SoldSchema);


export default soldModel;

