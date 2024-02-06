const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //find the notes
  const notes = await Note.find();
  //respond with them
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  //get id of url
  const noteId = req.params.id;
  //find the note using that id
  const note = await Note.findById(noteId);
  //respond with note
  res.json({ note: note });
};

const createNote = async (req, res) => {
  //get the sent in data off request body
  const head = req.body.head;
  const description = req.body.description;
  //create a note with it
  const note = await Note.create({ head: head, description: description });
  //respond with new note
  res.json({ note: note });
};

const updateNote = async (req, res) => {
  //get the id of the url
  const noteId = req.params.id;
  //get the data of req body
  const head = req.body.head;
  const description = req.body.description;
  //find and update record
  await Note.findByIdAndUpdate(noteId, {
    head: head,
    description: description,
  });
  //find updated note
  const note = await Note.findById(noteId);
  //respond with it
  res.json({ note: note });
};

const deleteNote = async (req, res) => {
  //get id of url
  const noteId = req.params.id;
  //delete record
  await Note.deleteOne({ _id: noteId });
  //respond
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchNotes: fetchNotes,
  fetchNote: fetchNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
