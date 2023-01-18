import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  // ViewChild("nomeReferencia") variavel: ElementRef
  // Para pegar a referencia do DOM
  @ViewChild("nameIngredient") nameIngredienteRef!: ElementRef;
  @ViewChild("qntIngredient") qntIngredienteRef!: ElementRef;
 
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  

  addIngredient(){
    // Pegar o elemento por referencia - .value para pegar o valor    
    const novoNome = this.nameIngredienteRef.nativeElement.value;
    const novaQnt = this.qntIngredienteRef.nativeElement.value

    const newIngredient = new Ingredient(novoNome, novaQnt);

    this.ingredientAdded.emit(newIngredient);
  }

}
