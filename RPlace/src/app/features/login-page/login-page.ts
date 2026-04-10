import { Component } from '@angular/core';
import { Forms } from './forms/forms';
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../../domain/IUser';

@Component({
  selector: 'app-login-page',
  imports: [Forms],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
