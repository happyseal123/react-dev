export default function Aggregator({savedRecipes, totalCookTime}) {
  // export default function Aggregator(props) {
    // props.cookTime
    

    return (
        
        <div>
          <h2>Recipe Box:</h2>


          <h3>Saved Recipes:</h3>

          {savedRecipes.map((recipe) => (
            <p>{recipe}</p>
          ))}

          <h3>Total cook time:</h3>
          <p> {totalCookTime} minutes</p>
        </div>
        
    )
}