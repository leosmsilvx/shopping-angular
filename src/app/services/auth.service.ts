import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable()
export class AuthService{
    token!: string | null;
    errorMsg!: String;

    constructor(private router: Router){}

    async cadastrarUsuario(email: string, senha: string){
        const auth = firebase.getAuth();
        this.errorMsg = '';
        await firebase.createUserWithEmailAndPassword(auth, email, senha)
            .catch(
                error =>{
                    this.errorMsg = error;
                } 
            )
            return this.errorMsg;
    }

    async logarUsuario(email: string, senha: string){
        const auth = firebase.getAuth();
        this.errorMsg = '';
        await firebase.signInWithEmailAndPassword(auth, email, senha)
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
                error => {
                    this.errorMsg = error;
                }
            );
            return this.errorMsg;
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

    getUid(){
        const auth = firebase.getAuth();
        return auth.currentUser?.uid;
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