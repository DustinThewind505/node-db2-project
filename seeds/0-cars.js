
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1234, Make: 'Ford Fiesta', Model:'Fiesta', Mileage: 431, "Transmission Type": 'qwety qwerty qwertyqwe treyqw trq'},
        {VIN: 5678, Make: 'Honda', Model:'Civic', Mileage: 4531, "Transmission Type": 'qwety qwerty qwertyqwe treyqw trq'}
      ]);
    });
};
