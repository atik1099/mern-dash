import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, required: true, default: 'available', enum: ['available', 'sold']},
})

const propertyModel = mongoose.model('Property', PropertySchema);


export default propertyModel;

