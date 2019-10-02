const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Email = mongoose.model("Email", newsletterSchema);

module.exports = Email;