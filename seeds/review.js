exports.seed = function(knex, Promise) {
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
      {
        title: "",
        body: "",
        rating: ,
        username_id: ,
        tech_id: ,
      },
      {
        title: "",
        body: "",
        rating: ,
        username_id: ,
        tech_id: ,
      },
      {
        title: "",
        body: "",
        rating: ,
        username_id: ,
        tech_id: ,
      },
      {
        title: "",
        body: "",
        rating: ,
        username_id: ,
        tech_id: ,
      },
      {
        title: "",
        body: "",
        rating: ,
        username_id: ,
        tech_id: ,
      },
      ]);
    });
};
