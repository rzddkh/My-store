import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { cartProduct, Product } from 'src/app/types/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: cartProduct[] = this.cartService.getCart();
  empty!: boolean;
  constructor(private cartService: Cart) {}

  ngOnInit(): void {
    //getting cart data using cartService

    this.cart = this.cartService.getCart();
    this.cart ? (this.empty = true) : (this.empty = false);

    //calculating the total for the cart

    this.total();
  }

  //calculates the total for the cart
  total(): number {
    var total: number = 0;

    this.cart.forEach((e) => {
      total += e.price * e.count;
    });
    total = Number(total.toFixed(2));
    return total;
  }
}
