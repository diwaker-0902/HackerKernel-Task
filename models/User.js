// Import the base Model class from Objection.js
const { Model } = require("objection");

// Define the User model, representing the "users" table
class User extends Model {
  // Tell Objection.js which table this model is linked to
  static get tableName() {
    return "users";
  }

  // Define relationships with other models (tables)
  static get relationMappings() {
    const Task = require("./Task"); // Import Task model for relation

    return {
      // A user can have multiple tasks (one-to-many relationship)
      tasks: {
        relation: Model.HasManyRelation, // One user has many tasks
        modelClass: Task, // The related model
        join: {
          from: "users.id", // Primary key in users table
          to: "tasks.user_id", // Foreign key in tasks table
        },
      },
    };
  }
}

// Exporting User model for use in other parts of the app
module.exports = User;




/**
Migration (Database) 
Defines table structure in the actual MySQL database
uses when : Once when setting up or updating DB schema
tool used : Knex.js migrations

Models (Application Code)
Represents that table as a JavaScript object
used when : Throughout the application to interact with the database (read/write/query data)
tool used : Objection.js models
 */