import { Component  } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dataStorageService: DataStorageService, public authService: AuthService){}

  onLogout(){
    this.authService.logout();
  }

}
