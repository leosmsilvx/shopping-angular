import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../services/shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients!: Ingredient[];
  private subscription!: Subscription;

  constructor(private shoppingService: ShoppingService){}

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredient();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditIngredient(index: number){
    this.shoppingService.startedEditing.next(index);
  }

}
