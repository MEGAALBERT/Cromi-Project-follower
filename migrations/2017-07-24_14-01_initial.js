exports.up = function(knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments().index();

    table.text("project_name");

    table.text("description");

    table.boolean("active");

    table.text("contact_info");

    table.text("image")
  });
};

exports.down = function(knex, Promise) {};
