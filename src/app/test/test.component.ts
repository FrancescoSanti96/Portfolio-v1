import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None

})
//encapsulation: ViewEncapsulation.None -> serve per poter cambiare colore completametne anche da un altro componente.

export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
