import React from 'react';
import Card from '../cards/Card';

const UserPageRecipes = ({ deleteRecipe, favoriteRecipes, recipes, session }) => {
    return (
        <div className="user-page__recipes">
            {recipes.length > 0 && (
                <>
                    <h1 className='user-page__recipes-block-title'>Created By</h1>
                    <div className='cards'>
                        {recipes.map((recipe, index) => (
                            <Card key={index} recipe={recipe} deleteRecipe={deleteRecipe} session={session} />
                        ))}
                    </div>
                </>
            )}
            {favoriteRecipes.length > 0 && (
                <>
                    <h1 className='user-page__recipes-block-title'>Favorite</h1>
                    <div className='cards'>
                        {favoriteRecipes.map((recipe, index) => (
                            <Card recipe={recipe} key={index} deleteRecipe={deleteRecipe} session={session} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default UserPageRecipes;

