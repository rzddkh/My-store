import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { Product } from 'src/app/types/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Product[]
  empty!:boolean
  constructor(private cartService: AddToCartService) { }

  ngOnInit(): void {
    this.cart=this.cartService.getCart();
    this.cart.length?this.empty=true:this.empty=false;
  }


}
