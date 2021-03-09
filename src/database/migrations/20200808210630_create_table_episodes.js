exports.up = async knex => knex.schema.createTable('episodes', table => {
  table.increments('id')
  table.text('title').notNullable()
  table.text('link').notNullable().unique()
  table.text('description')

  table.text('category').notNullable()
  table.foreign('category').references('categories.title').onDelete('CASCADE')

  table.timestamps(true, true)
}).then()

exports.down = async knex => knex.schema.dropTable('episodes')
