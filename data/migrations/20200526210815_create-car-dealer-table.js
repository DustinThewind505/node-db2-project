exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.string('Model')
      tbl.string('Make')
      tbl.string('VIN')
      tbl.decimal('Mileage')
  
      tbl.string('transmission type')
      tbl.string('status of the title')
  })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.dropColumn('Model');
      tbl.dropColumn('VIN');
      tbl.dropColumn('Mileage');
      tbl.dropColumn('Clean');
      tbl.dropColumn('Salvage');
  });
  };