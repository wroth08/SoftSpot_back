
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skill', (table) => {
  table.increments();
  table.text('name');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skill');
};
