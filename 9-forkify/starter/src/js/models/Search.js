import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }

        async getResults() {
            try {
                    const result = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
                    this.result = result.data.recipes;
                    // console.log(this.result)
            }
            catch (error) {
                alert(error)
            }

}
    }


