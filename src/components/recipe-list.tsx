// Import deps
import React from 'react'
// Import components
import { RecipeListRow } from './recipe-list-row'
// Import styles
import './../styles/recipe-list.css'
// Create interfaces
interface RecipeUI {
  recipe_id: number;
  recipe_name: string;
  recipe_description: string;
  preparation_time: string;
  cooking_time: string;
  youtube_link: string;
  image_path: string;
}
interface RecipeListUI {
  recipes: RecipeUI[];
  loading: boolean;
  handleRecipeRemove: (recipe_id: number, recipe_name: string) => void;
  handleInstructionAdd: (recipe_id: number, recipe_name: string) => void;
}

// Create RecipeList component
export const RecipeList = (props: RecipeListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>
  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />
            <th className="table-head-item">Recipe Name</th>
            <th className="table-head-item">Description</th>
            <th className="table-head-item">Preparation Time</th>
            <th className="table-head-item">Cooking Time</th>
            <th className="table-head-item">YouTube Link</th>
            <th className="table-head-item">Image Path</th>
            <th className="table-head-item" />
          </tr>
        </thead>
        <tbody className="table-body">
          {props.recipes.length > 0 ? (
            props.recipes.map((recipe: RecipeUI, idx) => (
              <RecipeListRow
                key={recipe.recipe_id}
                recipes={recipe}
                position={idx + 1}
                handleRecipeRemove={props.handleRecipeRemove}
                handleInstructionAdd={props.handleInstructionAdd}
	      />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={8}>There are no recipes to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}
