
import React, { useState } from "react"
import ClaudRecipe from "./claude-recipe"
import IngredienList from "./ingredient-list"
function Main() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes", "all the main spices"]

    const [allingredients, setallngredients] = useState([...ingredients])

    const [recipeShown, setrecipeShown] = useState(false)



    function toogleRecipeShown() {
        setrecipeShown(prevValue => !prevValue)
    }

    let show = allingredients.length > 0 ? true : false

    function handleFormSubmit(formData) {
        console.log("Form submitted!")

        const newIngredient = formData.get("ingredient")
        setallngredients(prevIngredients => [...prevIngredients, newIngredient])


    }

    return (
        <main>
            <form action={handleFormSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {show && <IngredienList ingredients={allingredients} toogleRecipeShown={toogleRecipeShown} />}
            {recipeShown && <ClaudRecipe />}
        </main>
    )
}

export default Main