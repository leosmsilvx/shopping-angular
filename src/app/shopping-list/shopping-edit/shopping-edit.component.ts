import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  subscription: Subscription = this.shoppingService.startedEditing.subscribe();
  editMode = false;
  editItemIndex!: number;
  editItem!: Ingredient;

  // ViewChild("nomeReferencia") variavel: ElementRef
  // Para pegar a referencia do DOM
  // @ViewChild("nameIngredient") nameIngredienteRef!: ElementRef;
  // @ViewChild("qntIngredient") qntIngredienteRef!: ElementRef;

  @ViewChild("f") shoppingForm!: NgForm;

  constructor(private shoppingService: ShoppingService) {}  

  onSubmit(form: NgForm){
    // Sem necessidade dessa lógica mais
    // Pegar o elemento por referencia - .value para pegar o valor    
    // const novoNome = this.nameIngredienteRef.nativeElement.value.trim(); 
    // var novaQnt = this.qntIngredienteRef.nativeElement.value;    

    //trim remove NaN
    // if(novaQnt.trim() == ""){
    //   novaQnt = 1;
    // }

    //ParseInt pq o valor do input vem como string

    const value = form.value;
    const newIngredient = new Ingredient(value.name, parseInt(value.amount));

    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    }
    else{
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

  }

  ngOnInit(){
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingService.getIngredientByIndex(index);
        this.shoppingForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.shoppingForm.reset();
    this.editMode = false;
  }

  clearIngredientList(){
    this.shoppingService.clearIngredientList();
  }

  onDeleteIngredient(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

}
