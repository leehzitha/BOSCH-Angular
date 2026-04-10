  import { Component, Input, Output } from '@angular/core';
  import { EventEmitter } from '@angular/core';

  @Component({
    selector: 'app-pixel',
    standalone: true,
    imports: [],
    templateUrl: './pixel.html',
    styleUrl: './pixel.css',
  })
  export class Pixel {
    selected = false;

    @Input() id!: number;

    @Input()
    backgroundColor: string = 'white';
    
    @Output()
    onClick = new EventEmitter<number>();

    changeColor() {
      this.onClick.emit(this.id);
    }





  }
