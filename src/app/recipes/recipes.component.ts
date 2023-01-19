import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe((receita: Recipe) => {this.selectedRecipe = receita;})
  }

}
