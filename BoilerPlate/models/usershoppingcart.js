const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShoppingCartSchema = new Schema({
  
  item: { type: String, required: true },
  img: { type: String, trim: true },
  description: { type: String} ,
  price: { type: String, trim: true},
  size: { type: String, required: false},
  quantity: { type: String, required: false},
  userDonation: {type: String},
  date: { type: Date, default: Date.now }
});

const usershoppingcart = mongoose.model("usershoppingcart", userShoppingCartSchema);

module.exports =usershoppingcart;