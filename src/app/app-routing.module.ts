import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from "./order/list/list.component";
import { CreateComponent } from "./order/create/create.component";
import { EditComponent } from "./order/edit/edit.component";
import { ProductsComponent } from "./product/list/list.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'edit/:id', component: EditComponent },
  { path: 'orders', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
