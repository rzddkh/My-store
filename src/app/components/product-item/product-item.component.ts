import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/types/product';
import { Cart } from 'src/app/services/cart';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() itemsChild!: Product;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private cartService: Cart) {}
  count: number = 1;
  trackByIdx(index: number, obj: Product): any {
    console.log('used');
    return obj.name;
  }
  ngOnInit(): void {}

  addToCart(product: Product, count: number) {
    this.cartService.addToCart(product, count);
  }
}
