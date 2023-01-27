import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  msgError: String = '';
  showMsg: String = '';
  classStyle: String = '';

  constructor(private authService: AuthService, private dataStorage: DataStorageService){}

  async onCadastrar(form: NgForm){  
    const userUID = form.value.user;
    const nome = form.value.nome;
    const email = form.value.email;
    const senha = form.value.senha;

    const user = new User(nome, email, userUID, []);

    await this.authService.cadastrarUsuario(email, senha).then(error => this.msgError = error);
    const uid = this.authService.getUid();
    this.dataStorage.storeUser(user, uid).subscribe();

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
