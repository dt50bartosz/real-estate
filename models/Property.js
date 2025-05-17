const mongoose = require('mongoose');



const propertySchema = new mongoose.Schema({
  propertyId:  { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  orientation: String,
  propertyType: String,
  propertyCondition: String,
  usefulArea: Number,
  totalArea: Number,
  bedrooms: Number,
  bathrooms: Number,
  floor: Number,
  yearOfConstruction: Number,
  price: Number,
  ibi: String,
  community: String,
  photos: [String],
  description: String,
  town: String,
  postalCode: String,
  street: String,
  latitude: Number,
  longitude: Number,
  items: [String],
  sellerName: String,
  telephone: String,
  status:{type:Boolean,default:false}
}, { timestamps: true });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export default Property;