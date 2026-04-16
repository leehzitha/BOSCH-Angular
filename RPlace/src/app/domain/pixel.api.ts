import { Injectable } from "@angular/core";
import { Api } from "./api";
import { IPixel } from "./interfaces/IPixel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class PixelApi extends Api{
    // getPixels = () : Observable<IPixel[]> => {
    //     let a = Array<IPixel>
    //     return true;
    // }

    public getPixels = () : Observable<IPixel[]> => {
        return this.client.get<IPixel[]>(`${this.URL}/pixel`).pipe()
    }

    public updatePixel = (data : IPixel) : Observable<void> => {
        return this.client.post<void>(`${this.URL}/pixel`, data).pipe()
    }
}