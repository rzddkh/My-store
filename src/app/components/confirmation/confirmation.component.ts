import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/services/cart';
import { cartProduct } from 'src/app/models/product';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(private cartService: Cart) {}
  cart: cartProduct[] = this.cartService.getCart();
  name: string = this.cartService.customer;
  total: number = this.cartService.total;
  address: string = this.cartService.address;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.cartService.clearCart();
  }
}
