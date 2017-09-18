
exports.up = function(knex, Promise) {
  return knex.schema.createTable('username', (table) => {
  table.increments();
  table.text('name');
  table.text('bio');
  table.integer('review_id').references('review.id');
  table.integer('skill_id').references('skill.id');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('username');
};
