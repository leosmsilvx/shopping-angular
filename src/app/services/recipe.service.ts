import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];

    getRecipes(){        
        return this.recipes.slice();        
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;        
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipeIndex(index: number){
        return this.recipes[index];
    }    

    addRecipes(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;        
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);        
        this.recipesChanged.next(this.recipes.slice());
    }
    
}