import { Recipe } from './recipe.model'
import { Subject } from 'rxjs'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>()

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

      setRecipes(recipes: Recipe[]){
          this.recipes = recipes
          this.recipesChanged.next(this.recipes.slice())
      }

      getRecipes() {
          return this.recipes.slice()
      }

      getRecipe(index: number) {
          return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1)
          this.recipesChanged.next(this.recipes.slice())
      }
}