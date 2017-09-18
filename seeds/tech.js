exports.seed = function(knex, Promise) {
  return knex('tech').del()
    .then(function () {
      // Inserts seed entries
      return knex('tech').insert([
      {
        name: "Atom",
        description: "Text Editor",
        url: "www.atom.io",
        category: "TE",
      },
      {
        name: "VS Code",
        description: "Text Editor",
        url: "https://code.visualstudio.com",
        category: "TE",
      },
      {
        name: "Postman",
        description: "API Development",
        url: "https://www.getpostman.com",
        category: "Software",
      },
      {
        name: "JavaScript",
        description: "Programming Language",
        url: "https://www.javascript.com/",
        category: "Language",
      },
      {
        name: "Bulma",
        description: "CSS Framework",
        url: "www.bulma.io",
        category: "Library",
      },
      ]);
    });
};
