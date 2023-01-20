import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //routing from ts
  constructor(private router: Router){}
  
  functionToLoad(){
    //funções legais no .router
    //Ex: isActive
    this.router.navigate(['/path'])
    //Vai para /path/id/edit?parametro=10#idUrl
    //this.router.navigate(['/path', 'id', 'edit'], {queryParams: {parametro: '10'}, fragment: 'idUrl'})
  }

}
