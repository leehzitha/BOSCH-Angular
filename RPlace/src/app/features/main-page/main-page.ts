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
import { IPixel } from '../../domain/IPixel';
import { PixelApi } from '../../domain/pixel.api';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Pixel, CommonModule, Header, ColorModal, ReactiveFormsModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  constructor (
    private api : PixelApi
  ){}
  // pixels = Array.from({ length: 14400 }, () => ({ color: 'white' }));
  protected pixels: IPixel[][] = []

  ngOnInit(){
    let lines = [];

    for (let y = 0; y < 100; y ++) {
      let row : IPixel[] = [];
      for (let x = 0; x < 100; x ++) {
        row.push({
          Color: 'white',
          X: x,
          Y: y
        })
      }
      lines.push(row);
    }
    this.pixels = lines;
    this.loadData();
  }

  loadData() {
    this.api.getPixels().subscribe(
      res => {
        for (let y = 0; y < 100; y ++) {
          for (let x = 0; x < 100; x ++) {
            let exists : res.find(p => p.X == x && p.Y == y);

            row.push({
              color: 
            })
          }
        }
      }
    )
  }
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


