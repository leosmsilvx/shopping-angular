import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Maçãs", 10),
        new Ingredient("Tomates", 5),
    ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        var itemIn = false;
        for(let j in this.ingredients){
            if(this.ingredients[j].name == ingredient.name){
                this.ingredients[j].amount = this.ingredients[j].amount + ingredient.amount;
                itemIn = true;
            }
        }
        if(!itemIn){                    
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());

    };

    addIngredients(ingredientsOut: Ingredient[]){
        var itemIn = false;
        for(let i in ingredientsOut){
            for(let j in this.ingredients){
                if(this.ingredients[j].name === ingredientsOut[i].name){
                    this.ingredients[j].amount = this.ingredients[j].amount + ingredientsOut[i].amount;
                    itemIn = true;
                    console.log(ingredientsOut[i]);
                }
            }
            if(!itemIn){                  
                this.ingredients.push(ingredientsOut[i]);
            }
            
        }
        
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredientByIndex(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, novoIngrediente: Ingredient){
        this.ingredients[index] = novoIngrediente;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    clearIngredientList(){
        this.ingredients = [];
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);        
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}