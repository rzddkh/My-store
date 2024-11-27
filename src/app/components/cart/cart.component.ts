import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { cartProduct, Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
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
  constructor(
    private cartService: Cart,
    private router: Router,
    public _auth: AuthService
  ) {}

  ngOnInit(): void {
    //getting cart data using cartService

    this.cart = this.cartService.getCart();

    //calculating the total for the cart using total function
    this.cartTotal = this.total();

    this.cart.length == 0 ? (this.empty = true) : (this.empty = false);
  }

  //calculates the total for the cart
  total(): number {
    let total: number = 0;

    this.cart.forEach((e) => {
      total += e.price * e.count;
    });
    total = Number(total.toFixed(2));
    return total;
  }

  //item can be removed if the count goes to 0 in the UI

  countChange(item: number, index: number) {
    if (item == 0) {
      this.cartService.removeFromCart(index);
      //get total value after count changes
      this.cartTotal = this.total();
    }
    //get total value after count changes
    this.cartTotal = this.total();
    this.cartService.totalNumber.next(this.cartService.totalNumberOfItems());
    if (this.total() == 0) {
      this.empty = true;
    }
  }

  // remove button function
  removeButton(index: number) {
    this.cartService.removeFromCart(index);
    //get total value after count changes
    this.cartTotal = this.total();
    if (this.total() == 0) {
      this.empty = true;
    }
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
