import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeOption = "recipe";

  onChangeOption(option: string){
    this.activeOption = option;
  }

}
