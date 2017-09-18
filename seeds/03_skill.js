exports.seed = function(knex, Promise) {
  return knex('skill').del()
    .then(function () {
      // Inserts seed entries
      return knex('skill').insert([
      {
        name: "FrontEnd",
      },
      {
        name: "BackEnd",
      },
      {
        name: "Design",
      },
      {
        name: "Agile",
      },
      {
        name: "ERD",
      },
      ]);
    });
};
