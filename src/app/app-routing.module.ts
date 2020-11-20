import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from "./order/list/list.component";
import { CreateComponent } from "./order/create/create.component";
import { EditComponent } from "./order/edit/edit.component";
import { ProductsComponent } from "./product/list/list.component";
import { LoginComponent } from "./login/login.component";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  //{ path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
