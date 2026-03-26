import { Component, Input } from '@angular/core';
import { IUser } from './validate-cpf/user.mock';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  response! : boolean;
  user! : IUser;

  handleUserEvent = (responses : IUser | false) => {
    if (responses === false) {
      console.log("CPF inválido");
      this.response = false;
    } else {
      this.response = true;
      this.user = responses;
    }
    
  }

  
}
