import { Component, EventEmitter, Input, Output } from '@angular/core';
import MockUser, { IUser } from './user.mock';
import { Button } from '../../../shared/button/button';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../../domain/auth.api';
import { LoginDto } from '../../../domain/IUser';

@Component({
  selector: 'app-forms2',
  standalone: true,
  imports: [Button, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})

export class Forms2 {

  @Output()
  onClick : EventEmitter<IUser | false> = new EventEmitter();

  @Input()
  title = "";

  @Input()
  button = "";

//   submit = () => {
//     if (this.isValidName(this.user.username)) {
//       this.onClick.emit(this.user);
//       this.users.push(this.user);
//       console.log("XLickiu");
//     }
//     else {
//       this.onClick.emit(false);
//       console.log("User invalido");
//     }
//     console.log(this.users);
//   }

  constructor(private api: AuthApi){
    
  }

  SubscribeForm : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })

  get Username() {
    return this.SubscribeForm.get("username");
  }

  get Password() {
    return this.SubscribeForm.get("password");
  }

//   login = () => {
//     if (!this.loginForm.valid)
//     {
//       alert("Invalid fields");
//       return;
//     }

//     const data : LoginDto = {
//       password : this.Password?.value,
//       username : this.Username?.value
//     }

//     this.api.login(data).subscribe(
//       res => {
//         console.log(res)
//         sessionStorage.setItem("token", res)
//         alert("It works!")
//         this.loginForm.reset();
//       }
//     )
//   }

  subscribe = () => {
    if (!this.SubscribeForm.valid)
    {
      alert("Invalid fields");
      return;
    }

    const data: LoginDto = {
        password : this.Password?.value,
        username :this.Username?.value
    }
    this.api.subscribe(data).subscribe(
        res => {
            alert("Signed Up!");
            this.SubscribeForm.reset;
        }
    )


  }
}
