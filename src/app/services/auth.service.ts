import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable()
export class AuthService{
    token!: string | null;

    constructor(private router: Router){}

    cadastrarUsuario(email: string, senha: string){
        const auth = firebase.getAuth();
        firebase.createUserWithEmailAndPassword(auth, email, senha)
            .catch(
                error => console.log(error)
            )
    }

    logarUsuario(email: string, senha: string){
        const auth = firebase.getAuth();
        firebase.signInWithEmailAndPassword(auth, email, senha)
            .then(
                response => {
                    auth.currentUser?.getIdToken()
                    .then(
                        (token: string) => {
                            this.token = token;
                            this.router.navigate(['/receitas']);
                        }
                    )
                }                

            )
            .catch(
                error => console.log(error)
            )
    }

    getToken(){
        const auth = firebase.getAuth();        
        auth.currentUser?.getIdToken()
        .then(
            (token: string) => {
                this.token = token;
            }
        );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    logout(){
        const auth = firebase.getAuth();
        auth.signOut();
        this.token = null;
        this.router.navigate(['/login']);
    }
}