const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  head: String,
  description: String,
});

const Note = mongoose.model("Reminder", noteSchema);

module.exports = Note;
