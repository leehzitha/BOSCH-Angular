import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input()
  Title: string = ""

  @Input()
  Confirmation : boolean = true;

  @Output()
  onClose : EventEmitter<void> = new EventEmitter();

  
  toggleClose = () => {
    this.onClose.emit();
  }
}
