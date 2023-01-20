import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {  
  @ViewChild("msgItemAdd") msgItemAddRef!: ElementRef;

  ngOnInit(){
    setTimeout(() => {
      this.msgItemAddRef.nativeElement.style.opacity = 0;
    }, 2500);    
  }

}
