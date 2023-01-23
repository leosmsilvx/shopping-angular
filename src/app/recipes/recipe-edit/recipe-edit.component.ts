import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.editMode = params['index'] != null;
        if(this.editMode){

        }
      }
    )
  }

  onSubmit(){
    
  }

}
