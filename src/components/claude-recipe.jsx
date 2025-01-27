import ReactMarkdown from "react-markdown"

function ClaudRecipe(props) {


    return (

        <section className="suggested-recipe-container" aria-live="polite">
            <H2>Chef Claude Recommends</H2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>

    )
}

export default ClaudRecipe