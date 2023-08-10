const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
});

const ToDoModel = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDoModel;
