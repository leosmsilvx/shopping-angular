import { Component, ElementRef,  ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
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

  constructor(private shoppingService: ShoppingService) {}
  

  addIngredient(){
    // Pegar o elemento por referencia - .value para pegar o valor    
    const novoNome = this.nameIngredienteRef.nativeElement.value.trim(); 
    var novaQnt = this.qntIngredienteRef.nativeElement.value;

    //trim remove NaN
    if(novaQnt.trim() == ""){
      novaQnt = 1;
    }

    //ParseInt pq o valor do input vem como string
    const newIngredient = new Ingredient(novoNome, parseInt(novaQnt));

    this.shoppingService.addIngredient(newIngredient);
  }

}
