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

  msgError!: String;
  showMsg: String = '';

  async onLogin(form: NgForm){    
    const email = form.value.email;
    const senha = form.value.senha;
    
    await this.authService.logarUsuario(email, senha).then(error => this.msgError = error);

    if(this.msgError == 'FirebaseError: Firebase: Error (auth/user-not-found).'){
      this.showMsg = 'Usuário não encontrado.';
    }
    else if(this.msgError == 'FirebaseError: Firebase: Error (auth/wrong-password).'){
      this.showMsg = 'Login ou senha incorretos.';
    }
    else{
      this.showMsg = 'Ocorreu um erro ao tentar logar, tente novamente mais tarde.';
    }

  }
}
