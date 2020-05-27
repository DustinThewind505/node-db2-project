exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        //a primary key, called id that auto increments
        tbl.increments('id');
  
        //an index makes searching for a value in a column A LOT faster
        tbl.string('Make', 255).notNullable().unique().index();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };