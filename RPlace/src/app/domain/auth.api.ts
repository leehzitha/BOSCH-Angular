import { Injectable } from '@angular/core';
import { Api } from './api';
import { LoginDto } from './IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api{

  // o retorno do endpoint é um token, uma string 
  login = (data: LoginDto) : Observable<Object> => {
    return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
  }

  subscribe = (data: LoginDto) : Observable<void> => {
    return this.client.post<void>(`${this.URL}/auth/subscribe`, data).pipe();
  }
}
