import { Component } from '@angular/core';
import { EColor } from './e-color.enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my enum project';
  selectedColor:EColor=EColor.Green;
  enumHolder:typeof EColor = EColor;
}
