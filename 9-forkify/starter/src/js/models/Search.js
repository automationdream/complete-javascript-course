import axios from 'axios';
import { API_ADDRESS } from '../config'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const result = await axios.get(`${API_ADDRESS}/search?q=${this.query}`);
            this.result = result.data.recipes;
            // console.log(this.result)
        }
        catch (error) {
            alert(error)
        }

    }
}


