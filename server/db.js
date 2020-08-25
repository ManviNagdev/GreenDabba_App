// greendabba-app/server/db.js
// Import path module
const path = require('path')
// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')
// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})
// Create a table in the database called "recipes"
knex.schema
  // Make sure no "books" table exists
  // before trying to create new
  .hasTable('recipes')
    .then((exists) => {
      if (!exists) {
        // If no "recipes" table exists
        // create new, with "recipe_id", "recipe_name", "recipe_description",
        // "preparation_time", "cooking_time", "youtube_link", "image_path" columns
        // and use "recipe_id" as a primary identification
        // and increment "recipe_id" with every new record (book)
        return knex.schema.createTable('recipes', (table)  => {
          table.increments('recipe_id').primary()
          table.string('recipe_name')
          table.string('recipe_description')
          table.string('preparation_time')
          table.string('cooking_time')
	  table.string('youtube_link')
	  table.string('image_path')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Recipes\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })
// Just for debugging purposes:
// Log all data in "books" table
knex.select('*').from('recipes')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))
// Export the database
module.exports = knex
