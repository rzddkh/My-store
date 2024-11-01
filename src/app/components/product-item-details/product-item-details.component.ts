import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/types/product';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  items: Product[] = [];
  itemId!: number;
  item!: Product;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: AddToCartService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    let itemId!: number;
    this.activatedRoute.params.subscribe((params) => {
      itemId = params['id'];
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
