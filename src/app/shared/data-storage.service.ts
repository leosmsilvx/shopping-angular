import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http"
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../services/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes(){
        return this.http.put(
            "https://shopping-angular-8d3da-default-rtdb.firebaseio.com/recipes.json",
            this.recipeService.getRecipes()
        );
    }

    getRecipes(){
        const token = this.authService.getToken();

        this.http.get("https://shopping-angular-8d3da-default-rtdb.firebaseio.com/recipes.json?auth=" + token)
        .subscribe(
            (response: any) =>{
                const recipeJson = JSON.stringify(response);
                const recipes = JSON.parse(recipeJson);
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}