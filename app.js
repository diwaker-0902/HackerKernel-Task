const express = require("express");
const path = require("path");
const { Model } = require("objection");
const Knex = require("knex");

// Loading env vars from .env file
require("dotenv").config();

// Initialize Knex with the development configuration
const knexConfig = require("./knexfile");
const knex = Knex(knexConfig.development);

// Binding the initialized Knex instance to all the Objection models
Model.knex(knex);

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON payloads
app.use(express.json());

// Serve static files like CSS, JS, and client-side validation
app.use(express.static(path.join(__dirname, "public")));

// Set Handlebars as the template/view engine just like EJS 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Load all routes from the routes folder
const routes = require("./routes/index");
app.use("/", routes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
