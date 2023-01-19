import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    private ingredients: Ingredient[] = [
        new Ingredient("Maçãs", 10),
        new Ingredient("Tomates", 5),
    ];

    getIngredient(){
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    };

    addIngredients(ingredients: Ingredient[]){
        // //Forma Curso
        // this.ingredients.push(
        //     ...ingredients
        // );

        //Minha forma
        for(let index in ingredients){
            this.ingredients.push(ingredients[index]);
        }
    }
}