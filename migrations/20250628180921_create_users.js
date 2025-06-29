// This file defines a migration to create the "users" table in the database

// This function runs when you apply the migration (e.g., npx knex migrate:latest)
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); // Auto-incrementing primary key
    table.string("name").notNullable(); // Name of the user (required)
    table.string("email").notNullable(); // Email of the user (required)
    table.string("mobile").notNullable(); // Mobile number of the user (required)
  });
};

// This function runs when you roll back the migration (e.g., npx knex migrate:rollback)
exports.down = function (knex) {
  return knex.schema.dropTable("users"); // Drops the "users" table
};


/**
 Real-world Use Case of Migrations:

 Imagine we mistakenly added a column in a migration or created a table with the wrong name. Instead of manually fixing it in the DB, we can just:

Rollback the migration (npx knex migrate:rollback)

Fix our exports.up code

Re-run the migration (npx knex migrate:latest)
 */