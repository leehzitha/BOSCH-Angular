import { Component, EventEmitter, Input, Output } from '@angular/core';
import MockUser, { IUser } from './user.mock';
import { Button } from '../../../shared/button/button';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [Button, FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})

export class Forms {

  protected users: IUser[] = []

  constructor () {
    this.users = MockUser;
  }

  user: IUser = {
    username: "",
    password: ''
  }

  @Output()
  onClick : EventEmitter<IUser | false> = new EventEmitter();

  @Input()
  title = "";

  submit = () => {
    if (this.isValidName(this.user.username)) {
      this.onClick.emit(this.user);
      this.users.push(this.user);
      console.log("XLickiu");
    }
    else {
      this.onClick.emit(false);
      console.log("User invalido");
    }
    console.log(this.users);
  }

  // isValidCPF(value: string) {
  //   if (typeof value !== 'string') {
  //     return false;
  //   }
    
  //   value = value.replace(/[^\d]+/g, '');
    
  //   if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
  //     return false;
  //   }

  //   const values = value.split('').map(el => +el);
  //   const rest = (count: number) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;

  //   return rest(10) === values[9] && rest(11) === values[10];
  // }


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
