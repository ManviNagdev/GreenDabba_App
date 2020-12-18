// Import database
const knex = require('./../db')
// Retrieve all recipes
exports.recipesAll = async (req, res) => {
  // Get all recipes from database
  knex
    .select('*') // select all records
    .from('recipes') // from 'recipes' table
    .then(userData => {
      // Send recipes extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving recipes: ${err}` })
    })
}
// Create new recipe
exports.recipesCreate = async (req, res) => {
  // Add new recipe to database
  knex('recipes')
    .insert({ // insert new record, a recipe
      'recipe_name': req.body.recipe_name,
      'recipe_description': req.body.recipe_description,
      'preparation_time': req.body.preparation_time,
      'cooking_time': req.body.cooking_time,
      'youtube_link': req.body.youtube_link,
      'image_path': req.body.image_path
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Recipe \'${req.body.recipe_name}\'  created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.recipe_name} recipe: ${err}` })
    })

    console.log(req.body.instructionList)
    recipe_id_inst = knex('recipes').where('recipe_name',  req.body.recipe_name).select('recipe_id')
    console.log("for debugging", recipe_id_inst)
    console.log(req.body.instructionList.length)

    var fields = new Array(req.body.instructionList.length);
    for (i = 0; i < req.body.instructionList.length; i++) {
      fields[i] = i+1
    }
    const fieldsToInsert = fields.map(field => 
      ({ 'step_no': field, 'recipe_id': recipe_id_inst, 'step': req.body.instructionList[field-1].Instruction })); 
    console.log(fieldsToInsert)
    knex('instructions')
      .insert(fieldsToInsert)
      .then(() => {
        // Send a success message in response
        res.json({ message: `Instruction for recipe \'${req.body.recipe_name}\'  added.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error adding instruction for ${req.body.recipe_name} recipe: ${err}` })
      })
  }

// Remove specific recipe
exports.recipesDelete = async (req, res) => {
  // Find specific recipe in the database and remove it
  knex('recipes')
    .where('recipe_id', req.body.recipe_id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Recipe ${req.body.recipe_id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.recipe_id} recipe: ${err}` })
    })
}
// Remove all recipes on the list
exports.recipesReset = async (req, res) => {
  // Remove all recipes from database
  knex
    .select('*') // select all records
    .from('recipes') // from 'recipes' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Recipe list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting recipe list: ${err}.` })
    })
}
