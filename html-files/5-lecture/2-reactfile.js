
// creating function
// data =[bkjnvkjdfn], dummy data hai. jisme recipes hai 2
// and recipes have properties such as name, ingredients and steps.. 

// in react to make it work we can do following.. 
// menu will tell us about recipe name.. 
function Menu(props) {
    return <artcle>
            <header>
            
                <h1>{props.title}</h1>
            </header>
            <div className = 'recipes'>
                { props.recipes.map((recipe, i) => (
                    <Recipe 
                    key = {i}
                    Name = {recipe.name}
                    ingredient = {recipe.ingredient}
                    stpes = {recipe.step}/>
                ))

                }
                
                
            </div>
            </artcle>
    }
// function Menu({title, recipes}) {
    // same as above replace(props.titile, title) and rest will be same..
//}
// or it can be done by spread operator that is 
// inside recipe .. 

{/* <Recipe key = {i}
{...recipe}/>// recipe is from map method */}

// creating Recipe function

function Recipe({name, ingredient, steps}) {
    return 
    <section id = {name.toLowercase.replace(/ /g, '-')}>
        <h1>{name}</h1>
        <ul id = "ingredients">
            {ingredients.map((ingredient, i) => (
                <li key = {i}> {ingredient.name}</li>
            ))}
        </ul>
        <div className = "instructions">
            <h2>Cooking instructions</h2>
            {steps.map((step, i) =>
            <p key = {i}> {steps}</p>)}
        </div>
    </section> 

    // rendering .. Menu .. 

    ReactDOM.render(<Menu recipes ={data}  title="Great Recipes" />, document.getElementById("root"));
    
    

}