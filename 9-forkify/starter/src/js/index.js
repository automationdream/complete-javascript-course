import axios from 'axios';

async function getResults(query) {
    const result = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    const recipes = result.data.recipes;
    console.log(recipes)

}

getResults('pizza')