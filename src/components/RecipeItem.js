import { useState } from 'react';
import './RecipeItem.css';

export default function RecipeItem({savedItems, prop1, addClick, removeClick}) {

    const buttonShowing = () => {
        if (savedItems.includes(prop1.name)) {
            return ["none", "inline"];
        } else {
            return ["inline", "none"];
        }
    }

    return (
        <div id="card">
            <img src={prop1.image}/>
            <h3> {prop1.name}</h3>
            <h5>Meal Type: {prop1.mealtype}</h5>
            <h5>Difficulty Level: {prop1.difficulty}</h5>
            <h5>Prep Time: {prop1.preptime} Minutes</h5>

            <button style={{color:"green", display:buttonShowing()[0]}} onClick={() => {
                addClick(prop1.name, prop1.preptime);
            }

                }>Save Recipe
            </button>

            <button style={{color:"red", display:buttonShowing()[1]}} onClick={() => {
                removeClick(prop1.name, prop1.preptime);
            }
            }>Unsave Recipe</button>
        </div>
    )
}