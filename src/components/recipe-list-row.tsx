// Import deps
import {
  BrowserRouter as BRouter,
  Link,
} from "react-router-dom";
import React from 'react'
// Create interfaces
interface RecipeListRowUI {
  position: number;
  recipes: {
    recipe_id: number;
    recipe_name: string;
    recipe_description: string;
    preparation_time: string;
    cooking_time: string;
    youtube_link: string;
    image_path: string;
  }
  handleRecipeRemove: (recipe_id: number, recipe_name: string) => void;
}

// Create RecipeListRow component

export const RecipeListRow = (props: RecipeListRowUI) => (

  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>
    <td className="table-item">
      <Link to={`/viewRecipe?recipe_name=${props.recipes.recipe_name}`} >
        {props.recipes.recipe_name}
      </Link>

    </td>
    <td className="table-item">
      {props.recipes.recipe_description}
    </td>
    <td className="table-item">
      {props.recipes.preparation_time}
    </td>
    <td className="table-item">
      {props.recipes.cooking_time}
    </td>
    <td className="table-item">
      <a href={props.recipes.youtube_link}>Watch Recipe Video</a>
    </td>
    <td className="table-item img-resize">
      <img src={props.recipes.image_path} alt={props.recipes.recipe_name} width="250" height="250">
      </img>
    </td>
    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => props.handleRecipeRemove(props.recipes.recipe_id, props.recipes.recipe_name)}>
        Remove recipe
      </button>
    </td>
  </tr>

)
