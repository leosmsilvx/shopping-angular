import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private authService: AuthService){}

  onCadastrar(form: NgForm){
    const email = form.value.email;
    const senha = form.value.senha;

    this.authService.cadastrarUsuario(email, senha);
    
  }

}
