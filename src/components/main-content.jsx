
import React, { useState } from "react"
import ClaudRecipe from "./claude-recipe"
import IngredienList from "./ingredient-list"
import { getRecipeFromMistral } from "../ai"

function Main() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes", "all the main spices"]

    const [allingredients, setallngredients] = useState([...ingredients])

    const [recipe, setrecipe] = useState("")


    async function getRecipe() {
        //setrecipeShown(prevValue => !prevValue)
        const generatedRecipe = await getRecipeFromMistral(allingredients)
        setrecipe(generatedRecipe)

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

            {show && <IngredienList ingredients={allingredients} getRecipe={getRecipe} />}
            {recipe && <ClaudRecipe recipe={recipe} />}
        </main>
    )
}

export default Main