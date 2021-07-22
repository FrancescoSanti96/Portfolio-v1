import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

     //variable for expertMode function
     expert: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  expertMode() {
    this.expert = !this.expert;
  }
}
