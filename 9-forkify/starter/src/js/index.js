import Search from './models/Search'
import * as searchView from './view/searchView'

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

    //4) Search for recipes
    await state.search.getResults();

    //5) Render result on UI
    searchView.renderResults(state.search.result);
    console.log(state.search.result);
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})
