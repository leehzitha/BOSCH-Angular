import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output()
  onChange : EventEmitter<string> = new EventEmitter();

  texto = "";
  changed (valor : string) {
    this.onChange.emit(valor);
  }
  
}
