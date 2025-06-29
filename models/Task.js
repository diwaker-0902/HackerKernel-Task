// Importing the base Model class from Objection.js
const { Model } = require("objection");

// Creating the Task model that represents the "tasks" table in the database
class Task extends Model {
  // Telling Objection.js which table in the database this model is linked to
  static get tableName() {
    return "tasks";
  }

  // Defining relationships with other tables (in this case, "users")
  static get relationMappings() {
    // Importing the User model to define relationship
    const User = require("./User");

    return {
      // Defining that each task belongs to one user
      user: {
        relation: Model.BelongsToOneRelation, // One task belongs to one user
        modelClass: User, // The related model is user
        join: {
          from: "tasks.user_id", // Foreign key in the tasks table
          to: "users.id", // Primary key in the users table
        },
      },
    };
  }
}

// Exporting Task model so can be used in controllers and routes
module.exports = Task;
