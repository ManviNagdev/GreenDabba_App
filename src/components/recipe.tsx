import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Import components
import { RecipeList } from './recipe-list'
// Import styles
import './../styles/recipe.css'
// Create Recipe component
export const Recipe = () => {
  // Prepare states
  const [recipe_name, setRecipeName] = useState('')
  const [recipe_description, setRecipeDescription] = useState('')
  const [preparation_time, setPreparationTime] = useState('')
  const [cooking_time, setCookingTime] = useState('')
  const [youtube_link, setYoutubeLink] = useState('')
  const [image_path, setImagePath] = useState('')
  const [recipes, setRecipes] = useState([])
  const [instructionList, setInstructionList] = useState([{ Instruction: '' }])
  const [loading, setLoading] = useState(true)
  // Fetch all recipes on initial render
  useEffect(() => {
    fetchRecipes()
  }, [])
  // Fetch all recipes
  const fetchRecipes = async () => {
    // Send GET request to 'recipes/all' endpoint
    axios
      .get('http://localhost:3000/recipes/all')
      .then(response => {
        // Update the recipes state
        setRecipes(response.data)
        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the recipe list: ${error}`))
  }
  // Reset all input fields
  const handleInputsReset = () => {
    setRecipeName('')
    setRecipeDescription('')
    setPreparationTime('')
    setCookingTime('')
    setYoutubeLink('')
    setImagePath('')
    setInstructionList([{Instruction:''}])
  }
  // Create new recipe
  const handleRecipeCreate = () => {
    // Send POST request to 'recipes/create' endpoint
    axios
      .post('http://localhost:3000/recipes/create', {
        recipe_name: recipe_name,
        recipe_description: recipe_description,
        preparation_time: preparation_time,
        cooking_time: cooking_time,
        youtube_link: youtube_link,
        image_path: image_path,
        instructionList: instructionList
      })
      .then(res => {
        console.log(res.data)
        // Fetch all recipes to refresh
        // the recipes on the recipe list
        fetchRecipes()
      })
      .catch(error => console.error(`There was an error creating the ${recipe_name} recipe: ${error}`))
  }
  // Submit new recipe
  const handleRecipeSubmit = () => {
    // Check if all fields are filled
    if (recipe_name.length > 0 && recipe_description.length > 0 && preparation_time.length > 0 && cooking_time.length > 0 && youtube_link.length > 0 && image_path.length > 0 && instructionList.length > 0) {
      // Create new recipe
      handleRecipeCreate()
      console.info(`Recipe ${recipe_name} added.`)
      // Reset all input fields
      handleInputsReset()
    }
  }
  // Remove recipe
  const handleRecipeRemove = (recipe_id: number, recipe_name: string) => {
    // Send PUT request to 'recipes/delete' endpoint
    axios
      .put('http://localhost:3000/recipes/delete', { recipe_id: recipe_id })
      .then(() => {
        console.log(`Recipe ${recipe_name} removed.`)
        // Fetch all recipes to refresh
        // the recipes on the recipe list
        fetchRecipes()
      })
      .catch(error => console.error(`There was an error removing the ${recipe_name} recipe: ${error}`))
  }
  // Reset recipe list (remove all recipes)
  const handleListReset = () => {
    // Send PUT request to 'recipes/reset' endpoint
    axios.put('http://localhost:3000/recipes/reset')
    .then(() => {
      // Fetch all recipes to refresh
      // the recipes on the recipe list
      fetchRecipes()
    })
    .catch(error => console.error(`There was an error resetting the recipe list: ${error}`))
  }
  const handleInputChange = (e:any, index:number) => {
    const { name, value } = e.target
    const list = [...instructionList]
    list[index] = value
    setInstructionList(list)
  };

  const handleRemoveClick = (index:number) => {
    const list = [...instructionList];
    list.splice(index, 1);
    setInstructionList(list);
  };

  const handleAddClick = () => {
    setInstructionList([...instructionList, { Instruction: ""}]);
  };

  return (
    <div className="recipe-list-wrapper">
      {/* Form for creating new recipe */}
      <div className="recipe-list-form">
        <div className="form-wrapper" onSubmit={handleRecipeSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="recipe_name">Enter recipe name:</label>
              <input className="form-input" type="text" id="recipe_name" name="recipe_name" value={recipe_name} onChange={(e) => setRecipeName(e.currentTarget.value)} />
            </fieldset>
            <fieldset>
              <label className="form-label" htmlFor="recipe_description">Enter recipe description:</label>
              <input className="form-input" type="text" id="recipe_description" name="recipe_description" value={recipe_description} onChange={(e) => setRecipeDescription(e.currentTarget.value)} />
            </fieldset>
          </div>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="preparation_time">Enter preparation time:</label>
              <input className="form-input" type="text" id="preparation_time" name="preparation_time" value={preparation_time} onChange={(e) => setPreparationTime(e.currentTarget.value)} />
            </fieldset>
            <fieldset>
              <label className="form-label" htmlFor="cooking_time">Enter cooking time:</label>
              <input className="form-input" type="text" id="cooking_time" name="cooking_time" value={cooking_time} onChange={(e) => setCookingTime(e.currentTarget.value)} />
            </fieldset>
          </div>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="youtube_link">Enter youtube link:</label>
              <input className="form-input" type="url" id="youtube_link" name="youtube_link" value={youtube_link} onChange={(e) => setYoutubeLink(e.currentTarget.value)} />
            </fieldset>
            <fieldset>
              <label className="form-label" htmlFor="image_path">Enter image path:</label>
              <input className="form-input" type="url" id="image_path" name="image_path" value={image_path} onChange={(e) => setImagePath(e.currentTarget.value)} />
            </fieldset>
          </div>
        
        {instructionList.map((x, i) => {
        return (
          <div className="form-row">
            <fieldset>
            <label className="form-label" htmlFor="Instruction">Enter Instruction {i+1}:</label>
            <input className="form-input" type="url" id="Instruction" name="Instruction" value={x.Instruction} onChange={e => handleInputChange(e, i)} />
            </fieldset>
            <fieldset>
            {instructionList.length !== 1 && <button
              className="btn btn-add" onClick={() => handleRemoveClick(i)}>Remove Instruction</button>}
            </fieldset>
            <fieldset>
            {instructionList.length - 1 === i && <button className="btn btn-add" onClick={handleAddClick}>Add Instruction</button>}
            </fieldset>
          </div>
        );
      })}
      </div>
        <button onClick={handleRecipeSubmit} className="btn btn-add">Add the recipe</button>
      </div>
      {/* Render recipe list component */}
      <RecipeList recipes={recipes} loading={loading} handleRecipeRemove={handleRecipeRemove}/>
      {/* Show reset button if list contains at least one recipe */}
      {recipes.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>Reset recipes list.</button>
      )}
    </div>
  )
}
