// import { Nums } from './nums/nums';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // numOne: Nums = new Nums();
  numArr: any [];
  first: number = 8;
  second: number = 2;

  added: number = this.first + this.second;

  result: number = this.first >= this.second ? this.first : this.second;

  // constructor() {
  //   this.numArr = this.numOne.numCollection;
  // }
}
