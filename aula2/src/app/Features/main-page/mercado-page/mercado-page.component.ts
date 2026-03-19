import { Component } from '@angular/core';
import MockMarket, { IMarket } from './mercado-card/markets.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected markets: IMarket[] = [];
  constructor () {
    this.markets = MockMarket;
  }
}
