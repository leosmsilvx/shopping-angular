import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']

})export class RecipeDetailComponent implements OnInit{
  index!: number;
  recipe!: Recipe;

  constructor(private shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];        
        this.recipe = this.recipeService.getRecipeIndex(this.index);
      }
    );
  }

  addOnSList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/receitas']);
  }
}
