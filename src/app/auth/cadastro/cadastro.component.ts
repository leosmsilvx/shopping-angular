import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  msgError: String = '';
  showMsg: String = '';
  classStyle: String = '';

  constructor(private authService: AuthService){}

  async onCadastrar(form: NgForm){
    const email = form.value.email;
    const senha = form.value.senha;
    
    await this.authService.cadastrarUsuario(email, senha).then(error => this.msgError = error);

    if(this.msgError == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'){
      this.showMsg = 'Usuário já cadastrado.'
      this.classStyle = 'text-danger';
    } else{
      this.showMsg = 'Cadastro concluído com sucesso!'
      this.classStyle = 'text-success';
      form.reset();
    }

    return;
    
  }

}
