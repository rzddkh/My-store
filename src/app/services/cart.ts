import { Injectable } from '@angular/core';
import { cartProduct, Product } from '../types/product';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart: Array<cartProduct> = [];
  tracker: Array<Product> = [];
  count: number = 0;
  cartItem!: cartProduct;
  constructor() {}

  getCart(): cartProduct[] {
    return this.cart;
  }

  addToCart(product: Product, count: number) {
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

    console.log(this.tracker);
  }

  removeFromCart(product: cartProduct) {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
    return this.cart;
  }
}
