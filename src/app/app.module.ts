import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { JwtInterceptor } from "./helpers/jwt.interceptor";

import { AppComponent } from './app.component';
import { ListComponent } from './order/list/list.component';
import { HeadComponent } from './header/head/head.component';
import { CreateComponent } from './order/create/create.component';
import { EditComponent } from './order/edit/edit.component';
import { ProductsComponent } from "./product/list/list.component";
import { ModalComponent } from './shared/modal/modal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeadComponent,
    CreateComponent,
    EditComponent,
    ProductsComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
