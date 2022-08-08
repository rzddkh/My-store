import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cart: Product[] = []

  constructor() { }


  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    alert(`${product.name} is added to the cart`);
    return this.cart;

  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
    return this.cart;

  }

}
