import { Component } from '@angular/core';
import MockFood, { IFood } from './foods.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected foods: IFood[] = []

  constructor () {
    this.foods = MockFood;
  }

  
}
