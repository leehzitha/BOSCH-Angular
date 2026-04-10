import { Component } from '@angular/core';
import { Forms } from '../login-page/forms/forms';
import { Header } from '../../shared/header/header';
import { Forms2 } from './forms/forms';

@Component({
  selector: 'app-register-page',
  imports: [Forms2, Header],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {}
