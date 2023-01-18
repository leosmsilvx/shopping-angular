import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  public ingredients: Ingredient[] = [
    new Ingredient("Maçãs", 10),
    new Ingredient("Tomates", 5),
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
