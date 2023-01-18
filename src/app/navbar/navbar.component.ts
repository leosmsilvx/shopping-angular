import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() optionSelected = new EventEmitter<string>();

  onSelect(option: string){
     this.optionSelected.emit(option);
  }

}
