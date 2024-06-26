const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
