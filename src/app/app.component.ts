import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
        firebase.initializeApp({
          apiKey: "AIzaSyD56elshYLkHxQ2bVMDIieYzxogOcZuPtY",
          authDomain: "shopping-angular-8d3da.firebaseapp.com",
        })
  }

}
