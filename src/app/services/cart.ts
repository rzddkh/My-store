import { Injectable, Output } from '@angular/core';
import { cartProduct, Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
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
  totalNumber = new BehaviorSubject(this.totalNumberOfItems());
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
    this.totalNumber.next(this.totalNumberOfItems());
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.tracker.splice(index, 1);
    this.totalNumber.next(this.totalNumberOfItems());
  }

  clearCart(): void {
    this.cart.length = 0;
    this.tracker.length = 0;
    this.totalNumber.next(this.totalNumberOfItems());
  }
  totalNumberOfItems(): number {
    let total: number = 0;

    this.cart.forEach((e) => {
      total += +e.count;
    });

    return total;
  }
}
