import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './Features/register-page/register-page.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ButtonComponent } from './Shared/button/button.component';
import { CreatePostComponent } from './Features/create-post/create-post.component';
import { ValidateCPFComponent } from './Features/register-page/validate-cpf/validate-cpf.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    HeaderComponent,
    ButtonComponent,
    CreatePostComponent,
    ValidateCPFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
