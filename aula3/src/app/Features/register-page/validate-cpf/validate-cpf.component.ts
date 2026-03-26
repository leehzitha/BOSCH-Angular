import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUser } from './user.mock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCPFComponent {
  user: IUser = {
    username: "",
    cpf: "",
    password: ''
  }

  @Output()
  onClick : EventEmitter<IUser | false> = new EventEmitter();

  
  submit = () => {
    if (this.isValidCPF(this.user.cpf)) {
      this.onClick.emit(this.user);
      console.log("XLickiu");
    }
    else {
      this.onClick.emit(false);
    }
  }

  isValidCPF(value: string) {
    if (typeof value !== 'string') {
      return false;
    }
    
    value = value.replace(/[^\d]+/g, '');
    
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
      return false;
    }

    const values = value.split('').map(el => +el);
    const rest = (count: number) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;

    return rest(10) === values[9] && rest(11) === values[10];
  }


    isValidName(value : string) {
      if (value.trim() === "")
        return false;

      return true;
  }

  isValidPassword(value: string){
    if (value.length < 6)
      return false;
    return true;
  }

}
