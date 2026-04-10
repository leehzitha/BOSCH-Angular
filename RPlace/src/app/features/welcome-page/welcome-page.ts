import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Button } from '../../shared/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [Header, Button, RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {}
