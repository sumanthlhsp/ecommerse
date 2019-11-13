import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllItemsComponent } from './all-items/all-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


const routes: Routes = [
  {path: 'all-items', component: AllItemsComponent},
  {path: 'cart-items', component: CartItemsComponent},
  {path: '', redirectTo: '/all-items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
