  import { Component, Input, Output } from '@angular/core';
  import { EventEmitter } from '@angular/core';
import { IPixel } from '../../../domain/interfaces/IPixel';

  @Component({
    selector: 'app-pixel',
    standalone: true,
    imports: [],
    templateUrl: './pixel.html',
    styleUrl: './pixel.css',
  })
  export class Pixel {
    selected = false;

    // @Input() id!: number;

    @Input()
    backgroundColor: string = 'white';
    
    @Output()
    onClick = new EventEmitter<IPixel>();

    @Input()
    data! : IPixel;

    changeColor() {
      this.onClick.emit(this.data);
    }





  }
