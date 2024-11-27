import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/services/cart';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  itemId!: number;
  item: Product = { id: 0, name: '', price: 0, url: '', description: '' };
  items!: Product[];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count: number = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: Cart,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.itemId = +params['id'];
    });
    this.dataService
      .getItems()
      .subscribe((res) => (this.item = res[this.itemId - 1]));
  }

  addToCart(product: Product, count: number) {
    this.cartService.addToCart(product, count);

    if (count == 1) {
      alert(`${count} ${product.name} is added to the cart`);
    } else {
      alert(`${count} ${product.name}s is added to the cart`);
    }
  }

  navigateTo() {
    this.router.navigate(['/product', this.itemId]);
  }
}
