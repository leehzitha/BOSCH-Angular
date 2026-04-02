import { Component } from '@angular/core';
import { Pixel } from './pixel/pixel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Pixel, CommonModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  rows = Array(300)
  pixels = Array(300)
  colorSelector = false;

  @Input()
  selected : boolean
}
