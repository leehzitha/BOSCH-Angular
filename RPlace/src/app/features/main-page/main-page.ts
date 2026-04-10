import { Component, Input, Output } from '@angular/core';
import { Pixel } from './pixel/pixel';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { ColorModal } from './color-modal/color-modal';
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { LoginDto } from '../../domain/IUser';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Pixel, CommonModule, Header, ColorModal, ReactiveFormsModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  rows = Array(120);
  colorSelector = false;

  pixels = Array.from({ length: 14400 }, () => ({ color: 'white' }));
  
  selectedColor = 'white';
  pixelIndex = 0;
  open = false;

  handleColorChange(color : string){
    this.selectedColor = color;
  }

  handlePixelClick(index: number){
    this.pixels[index].color = this.selectedColor;  
    console.log(this.open);
    this.open = true;
    console.log(this.open)
  }
  }


