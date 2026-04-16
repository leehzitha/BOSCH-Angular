import { Injectable } from '@angular/core';
import { Api } from './api';
import { IPixel } from './interfaces/IPixel';
import { CanvasAction, MessageType, WebSocketMessage } from './interfaces/IRoom';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomApi extends Api{

  private wsUrl = "ws://10.234.197.18:5294/api/room";
  private _pixelSubject = new Subject<CanvasAction>();
  private socket!: WebSocket;

  public pixelsObservable : Observable<CanvasAction> = this._pixelSubject.asObservable();
  
  public connect = (roomID : string) => {
    const token = sessionStorage.getItem("token");

    if(!token)
      return;

    this.socket = new WebSocket(`${this.wsUrl}/${roomID}?token=${encodeURIComponent}`);

    this.socket.onopen = (event) => {
      console.log("Connection opened!");
    }

    this.socket.onmessage = (event: MessageEvent) => {
      const message : WebSocketMessage<any> = JSON.parse(event.data);

      switch (message.Type) {
        case MessageType.Message:
          console.log(message.Data);  
          break;
        case MessageType.FirstConnection:
          this._pixelSubject.next({type: 'FULL_LOAD', payload: message.Data})
          break;
        case MessageType.PlayerAction:
          this._pixelSubject.next({type: 'SINGLE_LOAD', payload: message.Data})
          break;
      }
    }

    this.socket.onerror = (err) => {
      console.error("Error while connecting with socket", err)
    }

    this.socket.close = () => {
      console.log("Connection ended!");
    }  
  }

  public closeConnection = () => {
    if(this.socket)
      this.socket.close();
  }
  
  public updatePixel = (data: IPixel) => {
    if(this.socket.readyState === WebSocket.OPEN) {
      this.socket.send( JSON.stringify(data) );
    }
    else {
      console.log("Websocket aren't connected yet!")
    }
  }
}
