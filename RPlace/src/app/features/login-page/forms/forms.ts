import { Component, EventEmitter, Input, Output } from '@angular/core';
import MockUser, { IUser } from './user.mock';
import { Button } from '../../../shared/button/button';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../../domain/auth.api';
import { LoginDto } from '../../../domain/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [Button, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})

export class Forms {

  protected users: IUser[] = []

  // constructor () {
  //   this.users = MockUser;
  // }

  // user: IUser = {
  //   username: "",
  //   password: ''
  // }

  @Output()
  onClick : EventEmitter<IUser | false> = new EventEmitter();

  @Input()
  title = "";

  @Input()
  button = "";

  // submit = () => {
  //   if (this.isValidName(this.user.username)) {
  //     this.onClick.emit(this.user);
  //     this.users.push(this.user);
  //     console.log("XLickiu");
  //   }
  //   else {
  //     this.onClick.emit(false);
  //     console.log("User invalido");
  //   }
  //   console.log(this.users);
  // }

  constructor(private api: AuthApi, private router: Router){
    
  }

  loginForm : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })

  get Username() {
    return this.loginForm.get("username");
  }

  get Password() {
    return this.loginForm.get("password");
  }

  login = () => {
    if (!this.loginForm.valid)
    {
      alert("Invalid fields");
      return;
    }

    const data : LoginDto = {
      password : this.Password?.value,
      username : this.Username?.value
    }

    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res)
        alert("It works!")
        this.loginForm.reset();
        this.router.navigate(['/paint'])
      }
    )
  }

  subscribe = () => {

  }
}
