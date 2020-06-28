import Search from './models/Search'
import Recipe from './models/Recipe'
import * as searchView from './view/searchView'
import { elements, renderLoader, clearLoader } from './view/base'

/** Global state of the app
 * - Search object
 * - Current reipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {}
const controlSearch = async () => {
    //1) Get query from view
    const query = searchView.getInput()

    //2) New search object and state
    state.search = new Search(query);

    //3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    clearLoader();


    //4) Search for recipes
    await state.search.getResults();

    //5) Render result on UI
    searchView.renderResults(state.search.result);
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
}
)

const controlRecipe = async () => {
    // Get rid of id
    const id = window.location.hash.replace("#", "");
    console.log(id)

    if (id) {
        try {
            //Prepare id for changes

            //Create new recipe object
            state.recipe = new Recipe(id)

            //Get recipe data
            await state.recipe.getRecipe()

            state.recipe.calcTime()
            state.recipe.calcServings()
            state.recipe.parseIngredients()
            //Render recipe
            console.log(state.recipe)

        } catch (error) {
            console.log(error)
        }
    }

}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe))