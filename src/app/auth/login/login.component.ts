import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  onLogin(form: NgForm){    
    const email = form.value.email;
    const senha = form.value.senha;
    
    this.authService.logarUsuario(email, senha);
  }
}
