import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe("Pudim", "Eu sou a descrição do pudim, muito delicioso!", "https://s2.glbimg.com/zVvdhw0YSVvTnOJkc6jZPi-kp1g=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/m/e/vRcQB5QSyWsFDkmsVzXg/pudim-de-leite.jpg", [
            new Ingredient('Leite', 1),
            new Ingredient('Doce de leite', 2)
        ]),
        new Recipe("Queijo", "Eu sou a descrição do queijo, muito bom!", "https://revistasaboresdosul.com.br/wp-content/uploads/2018/10/quejio-gruyere.jpg", [
            new Ingredient('Leite', 3)
        ]),
    ];

    getRecipes(){        
        return this.recipes.slice();        
    }

    getRecipeIndex(index: number){
        return this.recipes[index];
    }
      
    
}