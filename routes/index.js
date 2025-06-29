const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");

// Home - list users and tasks
router.get("/", userController.index);

// Add user form and submission
router.get("/add-user", userController.addUserForm);
router.post("/add-user", userController.saveUser);

// Add task form and submission
router.get("/add-task", taskController.addTaskForm);
router.post("/add-task", taskController.saveTask);

// Export users and tasks as Excel
router.get("/export", userController.exportExcel);

// API: Get tasks by userId
router.get("/tasks/:userId", taskController.getTasksByUserId);

module.exports = router;
