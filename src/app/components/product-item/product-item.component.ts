import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/services/cart';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  // product information is recieved from parent component
  @Input() itemsChild!: Product;
  // Alert data is being  sent to parent component
  @Output() Alertevent = new EventEmitter();
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private cartService: Cart) {}
  count: number = 1;

  ngOnInit(): void {}

  addToCart(product: Product, count: number) {
    this.cartService.addToCart(product, count);
    if (count == 1) {
      this.Alertevent.emit(`${count} ${product.name} is added to the cart`);
    } else {
      this.Alertevent.emit(`${count} ${product.name}s are added to the cart`);
    }
  }
}
