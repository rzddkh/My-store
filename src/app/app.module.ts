import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    ProductListComponent,
    CartComponent,
    ProductItemDetailsComponent,
    ProductItemComponent,
    NavigationComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
