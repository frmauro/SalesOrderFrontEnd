import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './order/list/list.component';
import { HeadComponent } from './header/head/head.component';
import { CreateComponent } from './order/create/create.component';
import { EditComponent } from './order/edit/edit.component';
import { ProductsComponent } from "./product/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeadComponent,
    CreateComponent,
    EditComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
