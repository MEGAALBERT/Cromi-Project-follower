exports.up = function(knex) {
    return knex.schema.createTable("messages", (table) => {
  
      table.text("contact_name");
  
      table.text("contact_email");
  
      table.text("contact_message");
  
    });
  };
  
  exports.down = function(knex, Promise) {};