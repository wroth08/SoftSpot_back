exports.seed = function(knex, Promise) {
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
      {
        title: "I love Atom.",
        body: "Atom was really cool to use for my project.",
        rating: 5,
        username_id: 1,
        tech_id: 1,
      },
      {
        title: "VS Code was ok.",
        body: "VS Code was challenging to use.",
        rating: 3,
        username_id: 2,
        tech_id: 2,
      },
      {
        title: "Postman was extremely helpful",
        body: "I really enjoyed using Postman to check my APIs.",
        rating: 4,
        username_id: 3,
        tech_id: 3,
      },
      {
        title: "JavaScript very helpful.",
        body: "JavaScript has helped me figure out women.",
        rating: 5,
        username_id: 4,
        tech_id: 4,
      },
      {
        title: "Bulma",
        body: "Bulma is lightweight and effective.",
        rating: 4,
        username_id: 5,
        tech_id: 5,
      },
      ]);
    });
};
