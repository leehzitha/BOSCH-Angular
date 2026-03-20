import { Component } from '@angular/core';
import MockFood, { IFood } from './foods.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected foods: IFood[] = []
  protected abrido = false;
  protected selectedFood! : IFood;


  constructor () {
    this.foods = MockFood;
  }

  clicked = (food : IFood) => {
    this.abrido = !this.abrido;
    this.selectedFood = food
  }

  close = () => {
    this.abrido = !this.abrido
  }




  
}
