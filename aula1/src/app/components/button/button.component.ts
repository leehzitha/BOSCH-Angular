import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked = false;

  @Output()
  onClick : EventEmitter<void> = new EventEmitter();

  @Input("texto")
  texto: string = "";

  @Input("label")
  label: string = "";
  
  clicked = () => {
    this.onClick.emit();
  }


}
