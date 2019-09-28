const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  to: { type: String, required: true },
  note: { type: String, required: true },
  from: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;