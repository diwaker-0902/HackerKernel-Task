// This migration creates the "tasks" table and defines its structure.

exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary(); // Auto-incrementing primary key for each task

    table
      .integer("user_id") // Reference to the user this task belongs to
      .unsigned()
      .notNullable()
      .references("id") // Points to users.id
      .inTable("users")
      .onDelete("CASCADE"); // If a user is deleted, delete their tasks too

    table.string("task_name").notNullable(); // The name or description of the task

    table
      .enum("task_type", ["Pending", "Done"]) // Task status: must be one of these
      .notNullable();
  });
};

// This function runs when rolling back the migration (drops the tasks table)
exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
