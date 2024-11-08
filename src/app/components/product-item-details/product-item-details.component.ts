import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/types/product';
import { Cart } from 'src/app/services/cart';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  itemId!: number;
  item!: Product;
  items!: Product[];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count: number = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: Cart,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    let itemId!: number;
    this.activatedRoute.params.subscribe((params) => {
      itemId = params['id'];
    });
    this.dataService
      .getItems()
      .subscribe((res) => (this.item = res[itemId - 1]));
  }

  addToCart(product: Product, count: number) {
    this.cartService.addToCart(product, count);
  }
}
