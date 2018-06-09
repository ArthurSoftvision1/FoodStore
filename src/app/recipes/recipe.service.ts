import { Recipe } from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            'First Item', 'This is the first description', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient('Rice', 2),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Second Item', 
        'Test description!', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [
            new Ingredient('Tomato', 2),
            new Ingredient('Grapes', 12)
        ])
      ]
    
      constructor(private slService: ShoppingListService) { }

      getRecipes() {
          return this.recipes.slice()
      }

      getRecipe(index: number) {
          return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }
}