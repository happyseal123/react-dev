import { useState } from 'react';

export default function RecipeItem({prop1, addClick}) {
    
    return (
        <div>
            <img src={prop1.image}/>
            <h2> {prop1.name}</h2>
            <h3>{prop1.mealtype}</h3>
            <h3>{prop1.difficulty}</h3>
            <h3>{prop1.preptime} Minutes</h3>
            <button onClick={() => addClick(prop1.name, prop1.preptime)}>Save Recipe</button>
        </div>
    )
}