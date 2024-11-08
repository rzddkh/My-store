import { Component, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/types/product';
import { Cart } from 'src/app/services/cart';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  items!: Product[];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private dataService: DataService, private cart: Cart) {}

  ngOnInit(): void {
    this.dataService.getItems().subscribe((res) => (this.items = res));
    this.cart.getCart();
  }
}
