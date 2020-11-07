import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './order/list/list.component';
import { HeadComponent } from './header/head/head.component';
import { CreateComponent } from './order/create/create.component';
import { EditComponent } from './order/edit/edit.component';
import { ProductsComponent } from "./product/list/list.component";
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeadComponent,
    CreateComponent,
    EditComponent,
    ProductsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
