import { useState } from 'react';
import './RecipeItem.css';

// const [saved, setSaved] = useState([]);
//   const [cookTime, setCookTime] = useState(0);


//   const saveRecipe = (recipeName, time) => {
//     setSaved([...saved, recipeName]);
//     setCookTime(cookTime+time);
//   }

export default function RecipeItem({savedItems, prop1, addClick, removeClick}) {

    const buttonShowing = () => {
        if (savedItems.includes(prop1.name)) {
            return ["none", "inline"];
        } else {
            return ["inline", "none"];
        }
    }

    return (
        <div>
            <img src={prop1.image}/>
            <h2> {prop1.name}</h2>
            <h3>Meal Type: {prop1.mealtype}</h3>
            <h3>Difficulty Level: {prop1.difficulty}</h3>
            <h3>Prep Time: {prop1.preptime} Minutes</h3>

            <button style={{display:buttonShowing()[0]}} onClick={() => {
                addClick(prop1.name, prop1.preptime);
            }

                }>Save Recipe
            </button>

            <button style={{display:buttonShowing()[1]}} onClick={() => {
                removeClick(prop1.name, prop1.preptime);
            }
            }>Unsave Recipe</button>
        </div>
    )
}


// export default function RecipeItem({prop1, addClick, removeClick}) {


//     const [addVis, setAddVis] = useState("inline");
//     const [removeVis, setRemoveVis] = useState("none");


//     return (
//         <div>
//             <img src={prop1.image}/>
//             <h2> {prop1.name}</h2>
//             <h3>Meal Type: {prop1.mealtype}</h3>
//             <h3>Difficulty Level: {prop1.difficulty}</h3>
//             <h3>Prep Time: {prop1.preptime} Minutes</h3>

//             <button style={{display:addVis}} onClick={() => {
//                 addClick(prop1.name, prop1.preptime);
//                 setAddVis("none");
//                 setRemoveVis("inline");
//             }

//                 }>Save Recipe
//             </button>

//             <button style={{display:removeVis}} onClick={() => {
//                 removeClick(prop1.name, prop1.preptime);
//                 setAddVis("inline");
//                 setRemoveVis("none");

//             }
//             }>Unsave Recipe</button>
//         </div>
//     )
// }