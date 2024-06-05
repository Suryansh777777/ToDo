const express = require("express");
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid payload" });
  }
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ msg: "Todo created" });
});

app.get("/todo", async (req, res) => {
  const todos = await Todo.find({});
  res.json({ todos });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid payload" });
  }
  await Todo.update({ _id: req.body.id }, { completed: true });
  res.json({ msg: "Todo marked as completed" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
