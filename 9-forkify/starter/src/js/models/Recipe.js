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
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds']
        const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound']

        // 1) Uniform units
        const newIngredients = this.ingredients.map(el => {
            let ingredient = el.toLowerCase();
            unitLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitShort[i]);
            })

            // 2) Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ')

            // 3) Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ')
            const unitIndex = arrIng.findIndex(el2 => unitShort.includes(el2));

            let objIng;
            if (unitIndex > -1) { 
                // There is a unit
                const arrCount = arrIng.slice(0, unitIndex);

                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'))
                }
                    objIng = {
                        count,
                        unit: arrIng[unitIndex],
                        ingredient: arrIng.slice(unitIndex + 1).join(' ')
                    }


            } else if (parseInt(arrIng[0], 10)) {
                // There is a unit but first element is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            }

            else if (unitIndex === -1) {
                // There is NO unit and NO number in first position
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }

            }

            // // Parse ingredients into count, unit ingredients
            return objIng;
        })
        this.ingredients = newIngredients;
    }

}
