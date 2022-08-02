import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/types/product';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  items!: Product[] 
  itemId!: number 
  item!: Product;
  numbers: number[]=[1,2,3,4,5,6,7,8,9,10]
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let itemId: number = 0
    this.activatedRoute.params.subscribe(params => {
      itemId = (params['id']);
    });

    const dataservice = new DataService;
    this.items = dataservice.getItems();
    this.item = this.items.filter(item => item.id == itemId)[0];

  }

}
