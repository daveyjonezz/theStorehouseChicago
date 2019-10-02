const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemsSchema = new Schema({
  
  item: { type: String, required: true },
  price: { type: String, trim: true},
  description: { type: String} ,
  size: { type: String},
  quantity: { type: String},
  img: { type: String, trim: true },
  donationAmount: { type: String},
  date: { type: Date, default: Date.now }
});
const items = mongoose.model("items", itemsSchema);
module.exports =items;
