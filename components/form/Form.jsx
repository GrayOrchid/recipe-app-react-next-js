'use client'
import React, { useState } from 'react';
import Select from './Select';
import './recipeForm.css'

const Form = ({ handlSubmit, recipe, setRecipe, imageUpLoad }) => {

    return (
        <form onSubmit={handlSubmit} className='recipe__add-form ' >
            <div className='recipe__add-form-group recipe__add-form-input-group'>
                <input required value={recipe.title} type="text" placeholder='title' className="recipe__add-form-text-input" onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
                <input required value={recipe.time} type="number" placeholder='time in minutes' className="recipe__add-form-text-input" onChange={(e) => setRecipe({ ...recipe, time: e.target.value })} />
                <input required value={recipe.portions} type="number" placeholder='portions' className="recipe__add-form-text-input" onChange={(e) => setRecipe({ ...recipe, portions: e.target.value })} />
            </div>
            <div className='recipe__add-form-group recipe__add-form-another-group'>
                <Select recipe={recipe} setRecipe={setRecipe} />
                <input required type="file" placeholder='image' className="recipe__add-form-text-input" onChange={(e) => imageUpLoad(e)} />
            </div>
            <div className='recipe__add-form-group recipe__add-form-textarea-group'>
                <textarea required value={recipe.description} type="text" placeholder='decription ' className="recipe__add-form-text-textarea " onChange={(e) => setRecipe({ ...recipe, description: e.target.value })} />
                <textarea required value={recipe.cooking} type="text" placeholder='cooking ' className="recipe__add-form-text-textarea " onChange={(e) => setRecipe({ ...recipe, cooking: e.target.value })} />
                <textarea required value={recipe.ingredients} type="text" placeholder='ingredients ' className="recipe__add-form-text-textarea" onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} />
            </div>
            <button
                onSubmit={handlSubmit}
                type="submit"
                className="recipe__add-form-text-button">
                Submit
            </button>
        </form >

    );
}

export default Form;
