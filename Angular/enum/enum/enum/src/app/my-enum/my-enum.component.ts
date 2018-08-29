import { Component, OnInit } from '@angular/core';
import { EColor } from '../e-color.enum';
@Component({
  selector: 'app-my-enum',
  templateUrl: './my-enum.component.html',
  styleUrls: ['./my-enum.component.css']
})
export class MyEnumComponent implements OnInit {
  selectedColor:EColor=0;
  enumHolder:typeof EColor = EColor;
  colors: string[];
  constructor() {
    this.colors = this.getColor();
  }

  ngOnInit() {
  }
  getColor(): Array<string> {
    //array with the numeric and the values of the enum
    const keys = Object.keys(EColor);
    return keys.slice(keys.length / 2);

  }
  changeColor(newColor:EColor) {
    this.selectedColor=newColor;
    //  document.body.style.backgroundColor=enumHolder[newColor];
  }

}
