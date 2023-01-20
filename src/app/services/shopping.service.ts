import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
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
        this.ingredientsChanged.emit(this.ingredients.slice());

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
        
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}