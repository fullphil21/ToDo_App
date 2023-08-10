const mongoose = require("mongoose");
const ToDo = require("./models/ToDo");

const cors = require("cors");

const express = require("express");
const app = express();
const port = 4000;

require("dotenv").config();
const uri = process.env.MONGO_URL;

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Verbunden mit der Datenbank");
});

mongoose.connection.on("error", (err) => {
  console.error("Fehler bei der Datenbankverbindung:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Verbindung zur Datenbank getrennt");
});

//Middleware
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

//Endpoints
app.get("/todos", async (req, res) => {
  try {
    const toDos = await ToDo.find({});
    res.json(toDos);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, err: err?.message });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const toDoDoc = await ToDo.create({
      title,
      description,
      status,
    });
    res.status(200).json(toDoDoc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, err: err?.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const toDo = await ToDo.findByIdAndDelete(req.params.id);
    if (!toDo) {
      res
        .status(404)
        .json({ status: false, message: "Die Aufgabe wurde nicht gefunden!" });
    }
    res.status(200).json({ status: true, message: "Aufgabe wurde gelöscht!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, err: err?.message });
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const toDo = await ToDo.findById(req.params.id);
    if (!toDo) {
      res
        .status(404)
        .json({ status: false, message: "Die Aufgabe wurde nicht gefunden!" });
    }
    res.status(200).json(toDo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, err: err?.message });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const toDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!toDo) {
      res
        .status(404)
        .json({ status: false, message: "Die Aufgabe wurde nicht gefunden!" });
    }
    res.status(200).json({ status: true, toDo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, err: err?.message });
  }
});

//Server starten
app.listen(port, () => {
  console.log(`Server ist gestartet auf Port : ${port}`);
});
