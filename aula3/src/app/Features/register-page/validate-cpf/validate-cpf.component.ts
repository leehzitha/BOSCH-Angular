import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCPFComponent {
  @Input()
  cpf = 0;

}
