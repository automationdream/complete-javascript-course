import axios from 'axios';
import { API_ADDRESS } from '../config'

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const result = await axios.get(`${API_ADDRESS}/get?rId=${this.id}`);
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        }
        catch (error) {
            alert(error)
        }

    }

    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng/3);
        this.time = periods * 15;
    }

    calcServings(){
        this.servings = 4;
    }

    parseIngredients(){
            const unitLong=['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon','teaspoons','cups','pounds' ]
            const unitShort=['tbsp', 'tbsp', 'oz', 'oz', 'tsp','tsp','cup','pound' ]

            // Uniform units
            const newIngredients= this.ingredients.map(el => {
                let ingredient = el.toLowerCase();
                unitLong.forEach((unit,i) => {
                    ingredient = ingredient.replace(unit,unitShort[i]);
                })

            // Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, "")


            // Parse ingredients into count, unit ingredients
            return ingredient;
        })
        this.ingredients = newIngredients;
    }

}
