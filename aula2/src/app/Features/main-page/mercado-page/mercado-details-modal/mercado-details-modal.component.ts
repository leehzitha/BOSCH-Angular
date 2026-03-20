import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMarket } from '../mercado-card/markets.mock';

@Component({
  selector: 'app-mercado-details-modal',
  templateUrl: './mercado-details-modal.component.html',
  styleUrls: ['./mercado-details-modal.component.css']
})
export class MercadoDetailsModalComponent {
  @Output()
  onClick : EventEmitter<void> = new EventEmitter();
  
  @Input()
  market! : IMarket;
    
  closeModal = () => {
    this.onClick.emit();
  }
}
