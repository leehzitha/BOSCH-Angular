import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output()
  onClick : EventEmitter<void> = new EventEmitter();

  clicado = () => {
    this.onClick.emit();
  }
  
}
