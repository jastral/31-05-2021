import react, { Component } from 'react'
import Heading from './heading.js'
import Ingredients from './ingredients.js'
import Preparation from './preparation.js'
import './styles/main.css'

const Recipies = [
    {
        heading: 'Rasam Recipe',
        ingredients: [ 'tomato', 'asafoetida', 'cumin seeds', 'peppercorns', 'ginger', 'curry leaves', 'coriander leaves', 'salt as required', 'water' ],
        instructions: "Soak the tomatoes and ginger in lukewarm water with half a tsp of salt and this will remove the adulterant from the tomatoes.Then, take a grinder and add tomatoes, asafoetida, cumin seeds, peppercorns, ginger, curry leaves, coriander leaves and salt to it. Grind all these ingredients into a paste. Now, take a pan and add 2 cups of water to it. Heat the pan over a medium flame. Add the ground paste and bring to a boil. Stir it for 1-2 minutes and then switch off the flame. Remove and keep it aside. For the tempering, heat ghee in a pan over medium flame. Add mustard seeds to the same pan and allow them to fry. Fry the mustard seeds for 20 seconds and pour them into the rasam. To make it more delicious add some curry leaves and green chillies. Fry this mix until it starts crackling. Transfer the rasam in serving bowls and pair them with crispy papads and a platter of chutneys."
    },
    {
        heading: 'Rasam Recipe',
        ingredients: [ 'tomato', 'asafoetida', 'cumin seeds', 'peppercorns', 'ginger', 'curry leaves', 'coriander leaves', 'salt as required', 'water' ],
        instructions: "Soak the tomatoes and ginger in lukewarm water with half a tsp of salt and this will remove the adulterant from the tomatoes.Then, take a grinder and add tomatoes, asafoetida, cumin seeds, peppercorns, ginger, curry leaves, coriander leaves and salt to it. Grind all these ingredients into a paste. Now, take a pan and add 2 cups of water to it. Heat the pan over a medium flame. Add the ground paste and bring to a boil. Stir it for 1-2 minutes and then switch off the flame. Remove and keep it aside. For the tempering, heat ghee in a pan over medium flame. Add mustard seeds to the same pan and allow them to fry. Fry the mustard seeds for 20 seconds and pour them into the rasam. To make it more delicious add some curry leaves and green chillies. Fry this mix until it starts crackling. Transfer the rasam in serving bowls and pair them with crispy papads and a platter of chutneys."
    },
    {
        heading: 'Rasam Recipe',
        ingredients: [ 'tomato', 'asafoetida', 'cumin seeds', 'peppercorns', 'ginger', 'curry leaves', 'coriander leaves', 'salt as required', 'water' ],
        instructions: "Soak the tomatoes and ginger in lukewarm water with half a tsp of salt and this will remove the adulterant from the tomatoes.Then, take a grinder and add tomatoes, asafoetida, cumin seeds, peppercorns, ginger, curry leaves, coriander leaves and salt to it. Grind all these ingredients into a paste. Now, take a pan and add 2 cups of water to it. Heat the pan over a medium flame. Add the ground paste and bring to a boil. Stir it for 1-2 minutes and then switch off the flame. Remove and keep it aside. For the tempering, heat ghee in a pan over medium flame. Add mustard seeds to the same pan and allow them to fry. Fry the mustard seeds for 20 seconds and pour them into the rasam. To make it more delicious add some curry leaves and green chillies. Fry this mix until it starts crackling. Transfer the rasam in serving bowls and pair them with crispy papads and a platter of chutneys."
    }
]


class Main extends Component {

    render() {
        return(
            <div>
                {
                    Recipies.map((recipe, index) => <div>
                        <div className="recipies">
                            <Heading itemHeading={recipe.heading} />
                            <Ingredients list={ recipe.ingredients } />
                            <h3>Steps to make Rasam</h3>
                            <Preparation instructions={ recipe.instructions } />
                        </div> 
                        <div>
                            <br />
                        </div>
                    </div>
                    )
                }

            </div>
        )
    }

}

export default Main;