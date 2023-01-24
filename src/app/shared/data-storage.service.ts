import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http"
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes(){
        return this.http.put(
            "https://shopping-angular-8d3da-default-rtdb.firebaseio.com/recipes.json",
            this.recipeService.getRecipes()
        );
    }

    getRecipes(){
        this.http.get("https://shopping-angular-8d3da-default-rtdb.firebaseio.com/recipes.json")
        .subscribe(
            (response: any) =>{
                const recipeJson = JSON.stringify(response);
                const recipes = JSON.parse(recipeJson);
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}