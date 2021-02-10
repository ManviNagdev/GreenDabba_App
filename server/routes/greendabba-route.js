// Import express
const express = require('express')
// Import greendabba-controller
const greendabbaRoutes = require('./../controllers/greendabba-controller.js')
//const greendabbaInstructionsRoutes = require('./../controllers/greendabba-controller.js')
// Create router
const router = express.Router()
// Add route for GET request to retrieve all recipes
// In server.js, recipes route is specified as '/recipes'
// this means that '/all' translates to '/recipes/all'
router.get('/all', greendabbaRoutes.recipesAll)
// Add route for POST request to create new recipe
// In server.js, recipes route is specified as '/recipes'
// this means that '/create' translates to '/recipes/create'
router.post('/create', greendabbaRoutes.recipesCreate)
// Add route for PUT request to delete specific recipe
// In server.js, recipes route is specified as '/recipes'
// this means that '/delete' translates to '/recipes/delete'
router.put('/delete', greendabbaRoutes.recipesDelete)
// Add route for PUT request to reset recipes list
// In server.js, recipes route is specified as '/recipes'
// this means that '/reset' translates to '/recipes/reset'
router.put('/reset', greendabbaRoutes.recipesReset)
// Add route for POST request to open recipe 
router.post('/viewRecipe', greendabbaRoutes.recipesOpen)
// Add route for POST request to open instructions
router.post('/viewInstruction', greendabbaRoutes.instructionsOpen)
// Add route for POST request to view recipes on homepage 
router.post('/viewRecipeHome', greendabbaRoutes.recipesSelect)

// Export Router
module.exports = router
