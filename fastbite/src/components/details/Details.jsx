import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ recipes }) => {
    const { recipeId } = useParams();

    const recipe = recipes.find((r) => r.recipe.label === recipeId);
    console.log(recipe);

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    const product = recipe.recipe;

    return (
        <div>
            <h1>Name: {product['label']}</h1>
            <img src={product['image']} alt={product['label']} />
            <p>Calories: {product['calories']}</p>
            <p>Cuisine Type: {product['cuisineType']}</p>
            <p>Dish Type: {product['dishType']}</p>
            <p>Source: {product['source']}</p>
            <p>Ingredients: {product['ingredientLines']}</p>
            <p>Total Time: {product['totalTime']}</p>
            <p>Full recipe: {product['url']}</p>
            <p>Health Labels: {product['healthLabels']}</p>
        </div>
    );
};

export default Details;
