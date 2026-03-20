import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFood } from '../foods.mock';

type NewType = IFood;

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})


export class ComidaCardComponent {
  @Input()
  food! : IFood

  @Output()
  onClick : EventEmitter<IFood> = new EventEmitter();

  clicked = () => {
    this.onClick.emit(this.food);
  }


}
