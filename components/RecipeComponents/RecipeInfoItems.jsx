import React from 'react';

import Link from 'next/link';

const RecipeInfoItems = ({ recipe, postFavorite, toggleAddToFavorite, deleteFavorite, session }) => {
    return (
        <ul className='recipe__info-items'>
            <li className='recipe__info-item'>Portions: {recipe.portions}</li>
            <li className='recipe__info-item'>Time: {recipe.time} minute</li>
            <li className='recipe__info-item'>Type: {recipe.type}</li>
            <li className='recipe__info-item'>Diete: {recipe.diete}</li>
            {session?.user?.id && (
                <>
                    {toggleAddToFavorite ?
                        <button className='recipe__button __red' onClick={() => deleteFavorite(recipe)}>Delete</button>
                        :
                        <button className='recipe__button __gold' onClick={() => postFavorite()}>Add To Favorite</button>}
                    {session?.user?.id === recipe.creator._id && (
                        <button className='recipe__button '>
                            <Link className='recipe__edit-page-link ' href={`/editRecipe/${recipe._id}`}>Recipe Edit</Link>
                        </button>
                    )}

                </>
            )}
        </ul>
    );
}

export default RecipeInfoItems;
