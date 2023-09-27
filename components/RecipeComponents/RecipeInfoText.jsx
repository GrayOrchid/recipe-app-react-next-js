import React from 'react';

const RecipeInfoText = ({ recipe }) => {
    return (
        <div className='recipe-page__info-text'>
            <div className='recipe-page__info-text-item'>
                <h1 className="recipe-page__info-text-item-title">
                    Description:
                </h1>
                <p className="recipe-page__info-text-item-subtitle" >{recipe.description}</p>
            </div>
            <div className='recipe-page__info-text-item'>
                <h1 className="recipe-page__info-text-item-title">
                    Ingredients:
                </h1>
                <p className="recipe-page__info-text-item-subtitle">{recipe.ingredients}</p>
            </div>
            <div className='recipe-page__info-text-item'>
                <h1 className="recipe-page__info-text-item-title">
                    Cooking:
                </h1>
                <p className="recipe-page__info-text-item-subtitle">{recipe.cooking}</p>
            </div>
        </div>
    );
}

export default RecipeInfoText;
