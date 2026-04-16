import { Component, OnInit, signal } from '@angular/core';
import { RoomApi } from '../../domain/room.api';
import { ActivatedRoute } from '@angular/router';
import { IPixel } from '../../domain/interfaces/IPixel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room',
  imports: [],
  templateUrl: './room.html',
  styleUrl: './room.css',
})
export class Room implements OnInit{
  constructor(
    private roomApi : RoomApi,
    private router: ActivatedRoute
  ){}
  
  private idRoom : string = "";
  protected pixels = signal<IPixel[][]>([]);
  private pixelSubscription! : Subscription

  ngOnInit(): void {
    this.router.paramMap.forEach(param => {
      this.idRoom = param.get("id") ?? "";
    })
    
    let lines = []
    for (let i = 0; i < 100; i ++) {
      let line : IPixel[] = []
      for (let j = 0; i < 100; j++) {
        line.push({
          Color: "gray",
          X: j,
          Y: i
        })
      }
      lines.push(line)
    }
    this.pixels.set(lines)

    this.roomApi.connect(this.idRoom);

    this.roomApi.pixelsObservable.subscribe(res => {
      switch (res.type) {
        case 'FULL_LOAD':
          this.updateOnInit(res.payload);
          break;
        case 'SINGLE_LOAD':
          
          break;
        default:
          break;
      }
    })
  }

  updateSinglePixel = (data: IPixel) => {
    this.pixels.update(oldValue => {
      return oldValue.map(line => {
        return line.map(pixel => {
          if(pixel.X == data.X && pixel.Y == data.Y) {
            return data
          } else {
            return pixel
          }
        })
      })
    })
  }
  
  updateOnInit = (data: IPixel[]) => {
    this.pixels.update(oldValue => {
      var cloneList = [...oldValue];

      data.forEach(item => {
        cloneList[item.Y][item.X] = item;
      })

      return cloneList
    })
  }

  ngOnDestroy = () => {
    this.roomApi.closeConnection();
    // this.
  }
}