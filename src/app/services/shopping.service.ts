import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [];

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
            itemIn = false;
            for(let j in this.ingredients){
                if(this.ingredients[j].name === ingredientsOut[i].name){
                    this.ingredients[j].amount = this.ingredients[j].amount + ingredientsOut[i].amount;
                    itemIn = true;
                }
            }
            if(!itemIn){ 
                var newName = ingredientsOut[i].name;
                var newAmount = ingredientsOut[i].amount
                var newIngredient = new Ingredient(newName, newAmount);
                this.ingredients.push(newIngredient);
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

    setIngredients(ingredientes: Ingredient[]){
        this.ingredients = ingredientes;
        if(this.ingredients == null){
            this.ingredients = [];
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}