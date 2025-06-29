const User = require("../models/User");
const Task = require("../models/Task");

module.exports = {
  // Render form to add a new task
  addTaskForm: async (req, res) => {
    try {
      const users = await User.query();
      res.render("addTask", { users });
    } catch (err) {
      console.error("Error loading users for task form:", err);
      res.status(500).send("Something went wrong while loading the form");
    }
  },

  // Save a new task from form or JSON
  saveTask: async (req, res) => {
    const { user_id, task_name, task_type } = req.body;

    // Simple validation
    if (!user_id || !task_name || !task_type) {
      if (
        req.headers.accept?.includes("application/json") ||
        req.is("application/json")
      ) {
        return res.status(400).json({ error: "All fields are required!" });
      }
      return res.send("All fields required!");
    }

    try {
      const newTask = await Task.query().insert({
        user_id,
        task_name,
        task_type,
      });

      if (
        req.headers.accept?.includes("application/json") ||
        req.is("application/json")
      ) {
        return res.status(201).json({ message: "Task created", task: newTask });
      }

      res.redirect("/");
    } catch (err) {
      console.error("Error saving task:", err);
      res.status(500).send("Failed to save the task");
    }
  },

  // API to fetch tasks for a specific user
  getTasksByUserId: async (req, res) => {
    const { userId } = req.params;

    try {
      const tasks = await Task.query().where("user_id", userId);
      res.json(tasks);
    } catch (err) {
      console.error("Error fetching tasks for user:", err);
      res.status(500).json({ error: "Could not fetch tasks" });
    }
  },
};
