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
  rows = Array(120)
  pixels = Array(120)
  colorSelector = false;

  

  selected = false;
  
  @Output()
  modal : EventEmitter<boolean> = new EventEmitter();

  handlePixelClick(value : boolean){
    this.selected = value;
    this.modal.emit(value);
    console.log(this.selected)
  }
  }

  // get selected(): boolean {
  //   return this.selected;
  // }

