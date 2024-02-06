//load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependicies
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const notesControler = require("./controllers/noteController");

//create express app
const app = express();

//configure express app
app.use(express.json());
app.use(cors());

//connect to database
connectToDb();

//routing

app.get("/reminder", notesControler.fetchNotes);

app.get("/reminder/:id", notesControler.fetchNote);

app.post("/reminder", notesControler.createNote);

app.put("/reminder/:id", notesControler.updateNote);

app.delete("/reminder/:id", notesControler.deleteNote);

//start our server
app.listen(process.env.PORT);
