import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-modal',
  imports: [CommonModule],
  templateUrl: './color-modal.html',
  styleUrl: './color-modal.css',
  standalone: true
})
export class ColorModal {
    colors: string[] = [
    '#FFB86A',
    '#FFDF20',
    '#BBF451',
    '#7BF1A8',
    '#5EE9B5',
    '#46ECD5',
    '#53EAFD',
    '#8EC5FF',
    '#A3B3FF',
    '#DAB2FF',
    '#FDA5D5',
    '#FFA1AD',
    '#D6D3D1',
    '#79716B',
    '#FFFFFF'
];

  @Input()
  open : boolean = false;


  @Output()
  onClick : EventEmitter<string> = new EventEmitter();

  changeColor = (color : string) => {
    console.log(color);
    this.onClick.emit(color);
  }

}
