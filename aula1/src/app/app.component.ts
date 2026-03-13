import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula1';
  count = 0;
  texto = "";

  clicado = () => {
    this.count ++;
  }

  
}
