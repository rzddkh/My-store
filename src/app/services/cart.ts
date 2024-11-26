import { Injectable } from '@angular/core';
import { cartProduct, Product } from '../models/product';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart: Array<cartProduct> = [];
  tracker: Array<Product> = [];
  count: number = 0;
  cartItem!: cartProduct;
  customer!: string;
  address!: string;
  total!: number;
  constructor() {}

  getCart(): cartProduct[] {
    return this.cart;
  }

  addToCart(product: Product, count: number): void {
    this.cartItem = { count, ...product };
    if (_.find(this.tracker, product)) {
      this.cart.forEach((e) => {
        if (e.id === product.id) {
          e.count = Number(count) + Number(e.count);
        }
      });
    } else {
      this.cart.push(this.cartItem);
      this.tracker.push(product);
    }
  }

  removeFromCart(index: number): void {
    //const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
    this.tracker.splice(index, 1);
  }

  clearCart(): void {
    this.cart.length = 0;
    this.tracker.length = 0;
  }
}
