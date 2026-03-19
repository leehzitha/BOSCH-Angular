import { Component, Input } from '@angular/core';
import { IMarket } from './markets.mock';

@Component({
  selector: 'app-mercado-card',
  templateUrl: './mercado-card.component.html',
  styleUrls: ['./mercado-card.component.css']
})

export class MercadoCardComponent {
  @Input()
  market! : IMarket;
}
