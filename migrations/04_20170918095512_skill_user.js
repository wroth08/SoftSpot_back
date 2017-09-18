
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skill_user', (table) => {
  table.increments('id');
  table.integer('username_id').references('username.id');
  table.integer('skill_id').references('skill.id');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skill_user');
};
