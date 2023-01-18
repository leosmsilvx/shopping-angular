import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Output() showedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Pudim", "Eu sou a descrição do pudim, muito delicioso!", "https://s2.glbimg.com/zVvdhw0YSVvTnOJkc6jZPi-kp1g=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/m/e/vRcQB5QSyWsFDkmsVzXg/pudim-de-leite.jpg"),
    new Recipe("Queijo", "Eu sou a descrição do queijo, muito bom!", "https://revistasaboresdosul.com.br/wp-content/uploads/2018/10/quejio-gruyere.jpg"),
  ];

  showDetailRecipe(recipe: Recipe){
    this.showedRecipe.emit(recipe);
  }
}
