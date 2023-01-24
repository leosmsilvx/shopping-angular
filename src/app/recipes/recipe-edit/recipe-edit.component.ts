import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  index!: number;
  editMode = false;
  recipe!: Recipe;

  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router){}

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm(){
    let name = '';
    let imgPath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeIndex(this.index);
      name = recipe.name;
      imgPath = recipe.imgPath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          (recipeIngredients as unknown as FormArray).push(
            new FormGroup ({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );  
        }
      }
    }
    else{
      (recipeIngredients as unknown as FormArray).push(
        new FormGroup ({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      );
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imgPath': new FormControl(imgPath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.index, this.recipeForm.value);
    } else{
      this.recipeService.addRecipes(this.recipeForm.value);
    }

    this.onCancel();
  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
