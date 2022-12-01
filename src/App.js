import './App.css';
import { useState } from "react";
import recipeData from "./assets/recipe-data.json";
import RecipeItem from "./components/RecipeItem";
import Aggregator from './components/Aggregator';



function App() {

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

//   const [recipes, setRecipes] = useState([]);
//   const setUpRecipes = () => {
//     setRecipes(["hey"]);
//  }

  const [recipeDataState, setRecipeDataState] = useState(recipeData);

  const [sortOn, setSortOn] = useState(false);

  const sortingRecipes = (a,b) => {
    if (sortOn == false) {
      return 0;
    }
    if (sortOn == true) {
      if (a.preptime > b.preptime) {
        return 1;
      }
      if (a.preptime < b.preptime) {
        return -1;
      }
      return 0;
    }
  }


  const [filters, setFilters] = useState(["all", "all"]);

  const matchesFilterType = item => {

    if (filters[0] == "all" && filters[1] == "all") {
      return true;
    } else if (filters[1] == "all" && item.mealtype == filters[0]) {
      return true;
    } else if (filters[0] == "all" && item.difficulty == filters[1]) {
      return true;
    } else if (item.difficulty == filters[1] && item.mealtype == filters[0]) {
      return true;
    } else {
      return false;
    }
  }




  const [mealOpac, setMealOpac] = useState(1);
  const [mealColors, setMealColors] = useState(["black", "black", "black"]);

  const [diffOpac, setDiffOpac] = useState(1);
  const [diffColors, setDiffColors] = useState(["black", "black"]);

  return (
    <div className="App">
      <h1>Website Name</h1>

      <button onClick={() => {

        setSortOn(true);

        // const sortedRecipes = recipeDataState.sort(sortingRecipes);

        // setRecipeDataState(sortedRecipes);

      //   const sortedRecipes = (recipeDataState.sort((a,b) => {
      //     if (a.preptime > b.preptime) {
      //       return 1;
      //     }
      //     if (a.preptime < b.preptime) {
      //       return -1;
      //     }
      //     return 0;
      //   }
      // ))
        
      //   setRecipeDataState(sortedRecipes);

            }


        }>Sort By Ascending Prep Time
      </button>

      <button id="reset" onClick={() => {
        setMealOpac(1);
        setDiffOpac(1);
        setMealColors(["black", "black", "black"]);
        setDiffColors(["black", "black"]);
        // setRecipeDataState(recipeData);
        setFilters(["all", "all"]);
        setSortOn(false);
      }}>
        Reset All Filters
      </button>

      {/* {recipeData[0].name} */}

    <div>
    <h4>Filter By Meal Type:</h4>
    <button style={{ opacity : mealOpac , color: mealColors[0] }} onClick={() => {
      // setRecipeDataState(recipeDataState.filter(item => item.mealtype == "Breakfast"));
      // setMealOpac(0.6);
      setMealColors(["red", "black", "black"]);


      setFilters(["Breakfast", filters[1]]);


    }}>Breakfast</button>

    <button style={{opacity:mealOpac , color:mealColors[1]}} onClick = {() => {
      // setRecipeDataState(recipeDataState.filter(item => item.mealtype == "Lunch"));
      // setMealOpac(0.6);
      setMealColors(["black", "red", "black"]);

      setFilters(["Lunch", filters[1]]);

    }}>Lunch</button>

    <button style={{opacity:mealOpac, color:mealColors[2]}} onClick = {() => {
      // setRecipeDataState(recipeDataState.filter(item => item.mealtype == "Dinner"));
      // setMealOpac(0.6);
      setMealColors(["black", "black", "red"]);

      setFilters(["Dinner", filters[1]]);
    }}>Dinner</button>
    </div>

    <div>
    <h4>Filter by Difficulty Level:</h4>

    {/* const [diffOpac, setDiffOpac] = useState(1);
  const [diffColors, setDiffColors] = useState(["black", "black"]); */}

    <button style={{opacity:diffOpac, color:diffColors[0]}} onClick={() => {
      // setRecipeDataState(recipeDataState.filter(item => item.difficulty == "Beginner"));
      // setDiffOpac(0.6);
      setDiffColors(["red", "black"]);

      setFilters([filters[0], "Beginner"]);
    }}>Beginner</button>

    <button style={{opacity:diffOpac, color:diffColors[1]}} onClick={() => {
      // setRecipeDataState(recipeDataState.filter(item => item.difficulty == "Advanced"));
      // setDiffOpac(0.6);
      setDiffColors(["black", "red"]);

      setFilters([filters[0], "Advanced"]);
    }}>Advanced</button>
    </div>
    
      
      <div id="body">

        {/* <div id="recipes">
          <h2>Recipes:</h2>
          {recipeData.map((item) => (
            <RecipeItem prop1={item} addClick={saveRecipe} removeClick={removeRecipe}/>
          ))}
        </div> */}

      {/* <div id="recipes">
        <h2>Recipes:</h2>

          {recipeDataState.map((item) => (
            <RecipeItem prop1={item} addClick={saveRecipe} removeClick={removeRecipe}/>
          ))}

        </div> */}

   

        <div id="recipes">
        <h2>Recipes:</h2>

          {recipeDataState.sort(sortingRecipes).filter(matchesFilterType).map((item) => (
            <RecipeItem savedItems={saved} prop1={item} addClick={saveRecipe} removeClick={removeRecipe}/>
          ))}

        </div>

        <Aggregator
        savedRecipes={saved}
        totalCookTime={cookTime}
        />

        {/* <div>
          <h2>Recipe Box:</h2>


          <h3>Saved Recipes:</h3>

          {saved.map((recipe) => (
            <p>{recipe}</p>
          ))}

          <h3>Total cook time:</h3>
          <p> {cookTime} minutes</p>
        </div> */}

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
