  import { Component, Output } from '@angular/core';
  import { EventEmitter } from '@angular/core';

  @Component({
    selector: 'app-pixel',
    standalone: true,
    imports: [],
    templateUrl: './pixel.html',
    styleUrl: './pixel.css',
  })
  export class Pixel {
    backgroundColor = 'white';
    selected = false;

    @Output()
    onClick : EventEmitter<Boolean> = new EventEmitter();

    changeColor() {
      this.onClick.emit(true);
      this.backgroundColor = this.backgroundColor === 'white' ? 'black' : 'white'
    } 




  }
