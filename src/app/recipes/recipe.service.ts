import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('Title', 'Description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Other', 'OtherDescription', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ]
    
      getRecipes() {
          return this.recipes.slice()
      }
}