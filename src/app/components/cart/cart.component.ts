import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { cartProduct, Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: cartProduct[];
  empty!: boolean;
  name!: string;
  address!: string;
  creditCard!: number;
  cartTotal!: number;
  constructor(private cartService: Cart, private router: Router) {}

  ngOnInit(): void {
    //getting cart data using cartService

    this.cart = this.cartService.getCart();

    //calculating the total for the cart using total funciton
    this.cartTotal = this.total();

    this.cart.length == 0 ? (this.empty = true) : (this.empty = false);
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

  //item can be removed if the count goes to 0 in the UI

  countChange(item: number, index: number) {
    if (item == 0) {
      console.log(item, index);
      this.cartService.removeFromCart(index);
    }
  }

  // remove button function
  removeButton(index: number) {
    this.cartService.removeFromCart(index);
  }

  //submit button function
  onSubmit() {
    if (this.cart.length == 0) {
      alert('The cart is empty. An order can not be placed.');
    } else {
      this.cartService.customer = this.name;
      this.cartService.address = this.address;
      this.cartService.total = this.cartTotal;
      this.router.navigate(['/confirmation']);
      alert(`Total order of $ ${this.total()} has been placed!`);
    }
  }
}
