const mongoose = require ('mongoose');
const Schema =  mongoose.Schema;

const phoneSchema = new Schema (
  {
    id: {type: Number},
    name: {type:String},
    manufacturer: {type:String},
    description: {type:String},
    color:{type:String} ,
    price: {type: Number},
    imageFileName: {type: Number},
    screen: {type:String},
    processor: {type:String},
    ram: {type: Number},
  }
);
const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
