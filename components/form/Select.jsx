import { diets, typesOfDishes } from '@/foodTypes';
import React from 'react';

const Select = ({ recipe, setRecipe }) => {

    return (
        <>
            <select onChange={(e) => setRecipe({ ...recipe, diete: e.target.value })}>
                <option disabled value={'diete'}>diete</option>
                {
                    diets.map((diete, index) =>
                        <option value={diete} key={index}>{diete}</option>
                    )
                }
            </select>
            <select onChange={(e) => setRecipe({ ...recipe, type: e.target.value })}>
                <option disabled value={'type of dishes'}>type of dishes</option>
                {
                    typesOfDishes.map((type, index) =>
                        <option value={type} key={index}>{type}</option>
                    )
                }
            </select>
        </>
    );
}

export default Select;
