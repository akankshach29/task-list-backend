const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const tasks = [
  {
    date: "15/07/2024",
    tasks: [
      {
        taskId: "T001",
        task: "Get Groceries from the market.",
        taskStatus: "Pending",
      },
      {
        taskId: "T002",
        task: "Go to Gym.",
        taskStatus: "Completed",
      },
      {
        taskId: "T003",
        task: "Water the plants.",
        taskStatus: "Completed",
      },
    ],
  },
  {
    date: "16/07/2024",
    tasks: [
      {
        taskId: "T0012",
        task: "Go to the park.",
        taskStatus: "Completed",
      },
      {
        taskId: "T0021",
        task: "Get my room cleaned.",
        taskStatus: "Pending",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.json({ hello: "Express server is running" });
});

app.get("/tasks", (req, res) => {
  res.json({ tasks });
});

app.listen(3000, () => {
  console.log("server started");
});
