import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Features/login-page/login-page.component';
import { MainPageComponent } from './Features/main-page/main-page.component';
import { NotFoundPageComponent } from './Features/not-found-page/not-found-page.component';
import { HeaderComponent } from './Shared/header/header.component';
import { NavComponent } from './Shared/nav/nav.component';
import { MercadoPageComponent } from './Features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './Features/main-page/comida-page/comida-page.component';
import { ComidaCardComponent } from './Features/main-page/comida-page/comida-card/comida-card.component';
import { MercadoCardComponent } from './Features/main-page/mercado-page/mercado-card/mercado-card.component';
import { ComidaDetailsModalComponent } from './Features/main-page/comida-page/comida-details-modal/comida-details-modal.component';
import { MercadoDetailsModalComponent } from './Features/main-page/mercado-page/mercado-details-modal/mercado-details-modal.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    NavComponent,
    MercadoPageComponent,
    ComidaPageComponent,
    ComidaCardComponent,
    MercadoCardComponent,
    ComidaDetailsModalComponent,
    MercadoDetailsModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
