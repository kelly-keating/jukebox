
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tracks', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('soudcloud_id')
    table.string('genre')
    table.string('user_id')
    table.string('user_name')
    table.string('permalink_url')
    table.string('artwork_url')
    table.string('stream_url')
    table.boolean('streamable')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tracks')
}
