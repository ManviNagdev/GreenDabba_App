import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

export const ViewRecipe = () => {
    // Prepare states
    const [recipes, setRecipes] = useState([]);
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

            })
            .catch(error => console.error(`There was an error retrieving the recipe list: ${error}`))
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('recipe_name')
    axios
        .post('http://localhost:3000/recipes/viewRecipe/', { recipe_name: name })

        .then(response => {
            setRecipes(response.data)

        }
        )
        .catch(error => console.error(`There was an error opening the ${name} recipe: ${error}`))
    return (
        <div className="recipe-list-wrapper">
            {recipes.map((index) => (
                <div>
                    <div>
                        <h1>
                            {index.recipe_name}
                        </h1>
                        <h3> Description </h3>
                        {index.recipe_description}
                        <h3> Preparation Time </h3>
                        {index.preparation_time}
                        <h3> Cook Time </h3>
                        {index.cooking_time}
                        <ReactPlayer
                            url={index.youtube_link}
                        />
                        <img src={index.image_path} alt={index.recipe_name} width="250" height="250">
                        </img>
                    </div>

                </div>
            ))}
        </div>
    )
}