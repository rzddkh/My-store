import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/types/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items!: Product[];
  numbers: number[]=[1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
    const dataservice= new DataService;
    this.items=dataservice.getItems();
  }

}
