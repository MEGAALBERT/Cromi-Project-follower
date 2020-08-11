exports.up = function(knex) {
    return knex.schema.createTable("members", (table) => {
      table.increments().index();
  
      table.text("member_name");
  
      table.text("mote");
  
      table.text("actividad");
  
      table.text("correo_electronico");
  
    });
  };
  
  exports.down = function(knex, Promise) {};
