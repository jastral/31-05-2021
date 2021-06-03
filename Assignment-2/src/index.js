import react from 'react'
import reactDOM from 'react-dom'

const ingredients = [ 'tomato', 'asafoetida', 'cumin seeds', 'peppercorns', 'ginger', 'curry leaves', 'coriander leaves', 'salt as required', 'water' ]

reactDOM.render( 

    <div>
        <div>
            <h1>Rasam Recipe</h1>
        </div>

        <div>
            <h3>How to make rasam:</h3>
        </div>

        <div>
            <ol>
                { ingredients.map((ingredient, index) => react.createElement('li', null, ingredient)) }
            </ol>
        </div>

        <div>
            <p>
                Soak the tomatoes and ginger in lukewarm water with half a tsp of salt and this will remove the adulterant from the tomatoes.Then, take a grinder and add tomatoes, asafoetida, cumin seeds, peppercorns, ginger, curry leaves, coriander leaves and salt to it. Grind all these ingredients into a paste. Now, take a pan and add 2 cups of water to it. Heat the pan over a medium flame. Add the ground paste and bring to a boil. Stir it for 1-2 minutes and then switch off the flame. Remove and keep it aside. For the tempering, heat ghee in a pan over medium flame. Add mustard seeds to the same pan and allow them to fry. Fry the mustard seeds for 20 seconds and pour them into the rasam. To make it more delicious add some curry leaves and green chillies. Fry this mix until it starts crackling. Transfer the rasam in serving bowls and pair them with crispy papads and a platter of chutneys.
            </p>
        </div>
    </div>
    
    ,document.getElementById('root'))