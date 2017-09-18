exports.seed = function(knex, Promise) {
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
      {
        name: "Zmoney",
        bio: "The Worst",
      },
      {
        name: "Jdawg",
        bio: "Da Bomb",
      },
      {
        name: "Mr_T",
        bio: "My favorite color is green",
      },
      {
        name: "Max_Tegmark",
        bio: "We are, as we understand it, the creators and the created, of the mathematical universe",
      },
      {
        name: "Mr_WorldWide",
        bio: "Making mixes with everybody on the radio",
      },
      ]);
    });
};
