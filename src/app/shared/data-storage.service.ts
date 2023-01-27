import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../services/auth.service";
import { User } from "./user.model";
import { Ingredient } from "./ingredient.model";
import { ShoppingService } from "../services/shopping.service";

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService, private shoppingService: ShoppingService) {}

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

    storeUser(user: User, uid: string | undefined){        
        return this.http.put(
            "https://shopping-angular-8d3da-default-rtdb.firebaseio.com/users/"+uid+".json",
            user
        );
    }

    getUserIngredients(){
        const uid = this.authService.getUid();        
        const token = this.authService.getToken();

        this.http.get<Ingredient[]>("https://shopping-angular-8d3da-default-rtdb.firebaseio.com/users/"+uid+"/ingredientes.json?auth=" + token)
        .subscribe(
            (ingredientes) =>{
                this.shoppingService.setIngredients(ingredientes);
            }
        );
    }

    storeIngredients(){
        const uid = this.authService.getUid();

        return this.http.put(
            "https://shopping-angular-8d3da-default-rtdb.firebaseio.com/users/"+uid+"/ingredientes.json",
            this.shoppingService.getIngredient()
        );
    }


}