import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Cart } from 'src/app/services/cart';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  cartCount: number = 0;
  constructor(private cartService: Cart, public _auth: AuthService) {}

  ngOnInit(): void {
    //updates the number of the items in the cart button in navigation bar
    this.cartService.totalNumber.subscribe((e) => (this.cartCount = e));
  }
}
