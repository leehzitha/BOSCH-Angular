import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFood } from '../foods.mock';

@Component({
  selector: 'app-comida-details-modal',
  templateUrl: './comida-details-modal.component.html',
  styleUrls: ['./comida-details-modal.component.css']
})
export class ComidaDetailsModalComponent {
  @Output()
  onClick : EventEmitter<void> = new EventEmitter();

  @Input()
  food! : IFood;
  
  closeModal = () => {
    this.onClick.emit();
  }
}
