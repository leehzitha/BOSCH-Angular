import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Output()
  onClick : EventEmitter<void> = new EventEmitter();

  clicado = () => {
    this.onClick.emit();
  }
}
