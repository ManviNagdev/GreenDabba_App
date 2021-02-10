import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

export const ViewRecipe = () => {
    // Prepare states
    const [recipes, setRecipes] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = parseInt(urlParams.get('recipe_id'), 10)
    axios
        .post('http://localhost:3000/recipes/viewRecipe/', { recipe_id: id })

        .then(response => {
            setRecipes(response.data)
            //console.log(response.data)
        }
        )
        .catch(error => console.error(`There was an error opening the ${id} recipe: ${error}`))
    axios
        .post('http://localhost:3000/recipes/viewInstruction/', { recipe_id: id })
        .then(response => {
            // Update the recipes state
            setInstructions(response.data)
        })
        .catch(error => console.error(`There was an error retrieving the recipe list: ${error}`))
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
            <h3> Instructions </h3>
            {instructions.map((index) => (
                <div>

                    {index.step}

                </div>
            ))}
        </div>
    )
}