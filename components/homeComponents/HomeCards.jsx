import React from 'react';
import Card from '../cards/Card';

const HomeCards = ({ deleteRecipe, recipes, session, favoriteRecipes }) => {
    return (
        <div className='cards  '>
            {recipes.map((recipe, index) =>
                (<Card key={index} index={index} session={session} recipe={recipe} deleteRecipe={deleteRecipe} favoriteRecipes={favoriteRecipes} />)
            )}
        </div >
    );
}

export default HomeCards;
