import { ChangeDetectorRef, Component, Input, Output } from '@angular/core';
import { Pixel } from './pixel/pixel';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { ColorModal } from './color-modal/color-modal';
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { LoginDto } from '../../domain/interfaces/IUser';
import { EventEmitter } from '@angular/core';
import { IPixel } from '../../domain/interfaces/IPixel';
import { PixelApi } from '../../domain/pixel.api';
import { ActivatedRoute } from '@angular/router';
import { RoomApi } from '../../domain/room.api';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [Pixel, CommonModule, Header, ColorModal, ReactiveFormsModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  constructor (
    private cdr : ChangeDetectorRef,
    private api : PixelApi,
    private roomApi : RoomApi,
    private router: ActivatedRoute
  ){}

  private idRoom : string = ""

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
        this.pixels = this.pixels.map((row, x) => {
          return row.map((pixel, y) => {
            const exists = res.find(p => p.X == x && p.Y == y);
            return exists ? exists : pixel;
          })
        })
        this.cdr.detectChanges();
       }
    )
  }

  updatePixel(pixel : IPixel) {
    this.pixels[pixel.Y][pixel.X] = pixel
  }

  selectedColor = 'white';
  pixelIndex = 0;
  open = false;
  
  handleColorChange(color : string){
    this.selectedColor = color;
  }

  handlePixelClick(index: number){
    // this.pixels[index].color = this.selectedColor;  
    // console.log(this.open);
    // this.open = true;
    // console.log(this.open)
  }
  }


