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
  // Make sure no "recipes" table exists
  // before trying to create new
  .hasTable('recipes')
    .then((exists) => {
      if (!exists) {
        // If no "recipes" table exists
        // create new, with "recipe_id", "recipe_name", "recipe_description",
        // "preparation_time", "cooking_time", "youtube_link", "image_path" columns
        // and use "recipe_id" as a primary identification
        // and increment "recipe_id" with every new record (recipe)
        return knex.schema.createTable('recipes', (table)  => {
          table.increments('recipe_id').primary()
          table.string('recipe_name')
          table.string('recipe_description')
          table.string('preparation_time')
          table.string('cooking_time')
          table.string('youtube_link')
          table.string('image_path')
          table.string('category')
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
//Create table called 'ingredients'
knex.schema
  .hasTable('instructions')
    .then((exists) => {
      if (!exists) {
        // If no "instructions" table exists
        // create new, with "recipe_id", "step_no", "step",
        // and use "recipe_id" as a foreign key
        // and increment "step_no" with every new record (instruction)
        return knex.schema.createTable('instructions', (table)  => {
          table.integer('step_no')
          table.integer('recipe_id')
          table.string('step')
	  table.foreign('recipe_id').references('recipe_id').inTable('recipes');
        })
        .then(() => {
          // Log success message
          console.log('Table \'instructions\' created')
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
// Log all data in "recipes" table
knex.select('*').from('recipes')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))
// Log all data in "ingredients" table
knex.select('*').from('instructions')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))
// Export the database
module.exports = knex
