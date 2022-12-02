# Development

### Link to Deployed Website
https://happyseal123.github.io/react-dev/

### Goal and Value of the Application
My application is a collection of tasty recipes from which users can discover new meals to make and enjoy. I wanted to create a scrollable interface that makes it easy for users to find the type of recipe they are looking for. In the application, users can filter by type of recipe (Breakfast/Lunch/Dinner), and recipe difficulty (Beginner/Advanced), as well as sort by prep time required. Users can also save recipes to their recipe box. Users looking to find and save new recipes will value this application.

### Usability Principles Considered
One of the main usability principles I considered was making the state of the system known to users to minimize the "gulf of evaluation." Rather than have it be unclear what filters/sorting are selected, the buttons change color when pressed so users can clearly tell what filters/sorting they have applied.

I used text hierarchy and white space to make the most important information (the recipes, saved recipes section, and filters) distinct and clear to users. Since users today are used to scrolling to see recipes and to allow users to see a large number of recipes at once, I used a grid-style (done with flexbox) display of the recipe cards.

### Organization of Components
My application has two components in addition to the main App.js file. 

The RecipeItem component is what makes the recipe card for the application and is reused for each recipe. It takes in 4 props: a list of items the user has saved (to determine whether a "Save" or "Unsave" button should appear), prop1 (which contains data from the JSON file), and two functions defining what should happen if users save or unsave the recipe.

The Aggregator component is what makes the "Recipe Box" (saved recipes) section of the site, and takes in a list of names of recipes that have been saved and the total cook time for those recipes.

State is used within App.js extensively, to keep track of which recipes have been saved, total cook time for those recipes, whether sorting has been applied, which filters have been applied, as well as CSS style elements (how I chose to change styling based on interaction).

### How Data is Passed Down Through Components
TheRecipeItem component gets data from App.js, which tracks which recipes have been saved and imports the JSON data, as well as defines the functions for saving/unsaving a recipe. The Aggregator component also gets its data from App.js, which keeps track of which recipes have been saved and the total cook time for those recipes.

### How the User Triggers State Changes
Users can trigger state changes in several ways: saving or unsaving a recipe (by clicking on a button within the recipe card), filtering by meal type (by clicking on the meal type buttons), filtering by recipe difficulty (by clicking on difficutly level buttons), sorting (by clicking the sort button), and resetting filters (by clicking the reset filters button).


