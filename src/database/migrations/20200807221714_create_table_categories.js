exports.up = async knex => knex.schema.createTable('categories', table => {
  table.increments('id')
  table.text('title').notNullable().unique()

  table.timestamps(true, true)
})

exports.down = async knex => knex.schema.dropTable('categories')
