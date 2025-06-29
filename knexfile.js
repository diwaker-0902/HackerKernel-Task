require("dotenv").config();

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "your-db-name",
      password: process.env.DB_PASSWORD || "your-db-name",
      database: process.env.DB_NAME || "node_task_app",
      // database: process.env.DB_NAME || "hacker_kernel",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
