import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '', component: ProductListComponent },
  { path: 'product-item', component: ProductItemComponent },
  { path: 'product-item-details', component: ProductItemDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'notfound', component: PagenotfoundComponent },
  {
    path: 'product/:id',
    component: ProductItemDetailsComponent,
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
