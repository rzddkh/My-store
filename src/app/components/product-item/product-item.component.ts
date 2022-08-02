import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/types/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() itemsChild!: Product[]
  numbers: number[]=[1,2,3,4,5,6,7,8,9,10]
  constructor() {

   }
 
  ngOnInit(): void {
    
  }

}
