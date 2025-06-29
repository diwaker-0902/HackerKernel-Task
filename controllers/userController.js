const User = require("../models/User");
const Task = require("../models/Task");
const ExcelJS = require("exceljs");

module.exports = {
  // Show homepage with all users and their tasks
  index: async (req, res) => {
    try {
      const users = await User.query().withGraphFetched("tasks");
      res.render("index", { users });
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).send("Something went wrong");
    }
  },

  // Show form to add a new user
  addUserForm: (req, res) => {
    res.render("addUser");
  }, 

  // Handle form or API request to save a user
  saveUser: async (req, res) => {
    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
      // If it's an API request (like from Postman), send JSON error
      if (
        req.headers.accept?.includes("application/json") ||
        req.is("application/json")
      ) {
        return res.status(400).json({ error: "All fields are required!" });
      }

      // Otherwise just show a simple message in the browser
      return res.send("All fields required!");
    }

    try {
      const newUser = await User.query().insert({ name, email, mobile });

      if (
        req.headers.accept?.includes("application/json") ||
        req.is("application/json")
      ) {
        return res.status(201).json({ message: "User created", user: newUser });
      }

      res.redirect("/");
    } catch (err) {
      console.error("Error saving user:", err);
      res.status(500).send("Error creating user");
    }
  },

  // Export all users and tasks to an Excel file
  exportExcel: async (req, res) => {
    try {
      const users = await User.query();
      const tasks = await Task.query();

      const workbook = new ExcelJS.Workbook();

      // Create Users Sheet
      const userSheet = workbook.addWorksheet("Users");
      userSheet.columns = [
        { header: "ID", key: "id", width: 10 },
        { header: "Name", key: "name", width: 30 },
        { header: "Email", key: "email", width: 30 },
        { header: "Mobile", key: "mobile", width: 15 },
      ];
      users.forEach((user) => userSheet.addRow(user));

      // Create Tasks Sheet
      const taskSheet = workbook.addWorksheet("Tasks");
      taskSheet.columns = [
        { header: "ID", key: "id", width: 10 },
        { header: "User ID", key: "user_id", width: 10 },
        { header: "Task Name", key: "task_name", width: 30 },
        { header: "Task Type", key: "task_type", width: 15 },
      ];
      tasks.forEach((task) => taskSheet.addRow(task));

      // If the request is from Postman or an API client
      const userAgent = req.headers["user-agent"] || "";
      if (userAgent.toLowerCase().includes("postman")) {
        return res.json({
          message: "Excel file generated successfully (API test)",
        });
      }

      // Otherwise, stream the Excel file to the browser
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="users_tasks.xlsx"'
      );

      await workbook.xlsx.write(res);
      res.end();
    } catch (err) {
      console.error("Error generating Excel:", err);
      res.status(500).send("Failed to generate Excel file");
    }
  },
};
