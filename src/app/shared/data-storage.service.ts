import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http"
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../services/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes(){        
        const token = this.authService.getToken();
        return this.http.put(
            "https://shopping-angular-8d3da-default-rtdb.firebaseio.com/recipes.json?auth="+token,
            this.recipeService.getRecipes()
        );
    }

    getRecipes(){
        const token = this.authService.getToken();

        this.http.get<Recipe[]>("https://shopping-angular-8d3da-default-rtdb.firebaseio.com/recipes.json?auth=" + token)
        .subscribe(
            (receitas) =>{
                this.recipeService.setRecipes(receitas);
            }
        );
    }

}