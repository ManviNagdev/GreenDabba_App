import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";
import axios from 'axios'
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductButton
} from './ProductsElements';


const Products = ({ heading }) => {
    const [recipes, setRecipes] = useState([]);
    axios
        .post('http://localhost:3000/recipes/viewRecipeHome')

        .then(response => {
            setRecipes(response.data)

        }
        )
        .catch(error => console.error(`There was an error opening the recipe: ${error}`))
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {recipes.map((product, index) => {
                    return (

                        <ProductCard key={index}>
                            <Link to={`/viewRecipe?recipe_id=${product.recipe_id}`} >
                                <ProductImg src={product.image_path} alt={product.recipe_name} />
                                <ProductInfo>
                                    <ProductTitle>{product.recipe_name}</ProductTitle>
                                    {/* <ProductDesc>{product.recipe_description}</ProductDesc> */}
                                    {/* <ProductButton>View Recipe</ProductButton> */}
                                </ProductInfo>
                            </Link>
                        </ProductCard>

                    );
                })}
            </ProductWrapper>
        </ProductsContainer>

    );
};

export default Products;