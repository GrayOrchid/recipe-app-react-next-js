import { diets, typesOfDishes } from '@/foodTypes';
import React from 'react';

const TypesBtns = ({ search, setSearch, setDiete, setType, diete, type }) => {


    let d = (e) => {
        console.log(e);
    }
    return (
        <div className='food-types'>
            <div className="food-types__grpoup">
                <h3 className='food-types__title'>Diets : {diete}</h3>
                <div className='food-types__btns'>
                    <button className='food-types__btn' onClick={() => setDiete('')}>All</button>
                    {
                        diets.map((diete, index) => (
                            <button className='food-types__btn' key={index} onClick={() => setDiete(diete)}>{diete}</button>
                        ))
                    }
                </div>
            </div>
            <div className="food-types__grpoup">
                <h3 className='food-types__title'>Types : {type}</h3>
                <div className='food-types__btns'>
                    <button className='food-types__btn' onClick={() => setType('')}>All</button>
                    {
                        typesOfDishes.map((type, index) => (
                            <button className='food-types__btn' key={index} onClick={() => setType(type)}>{type}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TypesBtns;
