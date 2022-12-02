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

  const [sortColor, setSortColor] = useState("black");

  return (
    <div className="App">
      <h1>Happy Chef's Kitchen</h1>

      <button style={{color: sortColor}}onClick={() => {

        setSortColor("blue");

        setSortOn(true);

            }


        }>Sort By Ascending Prep Time
      </button>

      <button id="reset" onClick={() => {
        setMealOpac(1);
        setDiffOpac(1);
        setMealColors(["black", "black", "black"]);
        setDiffColors(["black", "black"]);
        setFilters(["all", "all"]);
        setSortOn(false);
      }}>
        Reset All Filters
      </button>


    <div>
    <h3>Filter By Meal Type:</h3>
    <button style={{ opacity : mealOpac , color: mealColors[0] }} onClick={() => {

      setMealColors(["blue", "black", "black"]);


      setFilters(["Breakfast", filters[1]]);


    }}>Breakfast</button>

    <button style={{opacity:mealOpac , color:mealColors[1]}} onClick = {() => {

      setMealColors(["black", "blue", "black"]);

      setFilters(["Lunch", filters[1]]);

    }}>Lunch</button>

    <button style={{opacity:mealOpac, color:mealColors[2]}} onClick = {() => {

      setMealColors(["black", "black", "blue"]);

      setFilters(["Dinner", filters[1]]);
    }}>Dinner</button>
    </div>

    <div>
    <h3>Filter by Difficulty Level:</h3>

    <button style={{opacity:diffOpac, color:diffColors[0]}} onClick={() => {

      setDiffColors(["blue", "black"]);

      setFilters([filters[0], "Beginner"]);
    }}>Beginner</button>

    <button style={{opacity:diffOpac, color:diffColors[1]}} onClick={() => {

      setDiffColors(["black", "blue"]);

      setFilters([filters[0], "Advanced"]);
    }}>Advanced</button>
    </div>
    
      
      <div id="body">

    

        <div id="recipes">
          <div>
            <h2>Recipes:</h2>
          </div>
        
          <div id="recipes-grid">
          {recipeDataState.sort(sortingRecipes).filter(matchesFilterType).map((item) => (
            <RecipeItem savedItems={saved} prop1={item} addClick={saveRecipe} removeClick={removeRecipe}/>
          ))}
          </div>

        </div>

        <div id="aggregator">
        <Aggregator
        savedRecipes={saved}
        totalCookTime={cookTime}
        />
        </div>

      
      </div>


      

    </div>
  );
}

export default App;
