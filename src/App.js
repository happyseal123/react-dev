import './App.css';
import { useState } from "react";
import recipeData from "./assets/recipe-data.json";
import RecipeItem from "./components/RecipeItem";



function App() {

  // const [items, setItem] = useState([]);
  // const [total, setTotal] = useState(0);

  const [saved, setSaved] = useState([]);
  const [cookTime, setCookTime] = useState(0);


  const saveRecipe = (recipeName, time) => {
    setSaved([...saved, recipeName]);
    setCookTime(cookTime+time);
  }

  const removeRecipe = (recipeName, time) => {
    setSaved(saved.filter(item => item != recipeName));
    setCookTime(cookTime-time);
  }

  return (
    <div className="App">
      <h1>Website Name</h1>
      
      <div id="body">
        <div id="recipes">
          <h2>Recipes:</h2>
          {recipeData.map((item) => (
            <RecipeItem prop1={item} addClick={saveRecipe} removeClick={removeRecipe}/>
          ))}
        </div>
        <div>
          <h2>Recipe Box:</h2>


          <h3>Saved Recipes:</h3>
          {saved.map((recipe) => (
            <p>{recipe}</p>
          ))}

          <h3>Total cook time:</h3>
          <p> {cookTime} minutes</p>
        </div>
      </div>


      

    </div>
  );
}

export default App;





// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
