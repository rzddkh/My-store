import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  items: { id: number, name: string, price: number, url: string, description: string }[]
  numbers: number[]=[1,2,3,4,5,6,7,8,9,10]
  constructor() {
    this.items=[]
   }
 
  ngOnInit(): void {
    const dataservice= new DataService;
    this.items=dataservice.getItems();
  }

}
