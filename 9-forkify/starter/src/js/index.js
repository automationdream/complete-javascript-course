import Search from './models/Search'

/** Global state of the app
 * - Search object
 * - Current reipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {}
const controlSearch = async () => {
    //1) Get query from view
    const query = 'pizza' //TODO

    //2) New search object and state
    state.search = new Search(query);
    // search.getResults()

    //3) Prepare UI for results

    //4) Search for recipes
    await state.search.getResults();

    //5) Render result on UI
    console.log(state.search.result);
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})
