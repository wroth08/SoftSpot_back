
exports.up = function(knex, Promise) {
  return knex.schema.createTable('endorse', (table) => {
  table.increments();
  table.integer('rating');
  table.integer('skill_id').references('skill.id');
  table.integer('user_id').references('username.id');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('endorse');
};
