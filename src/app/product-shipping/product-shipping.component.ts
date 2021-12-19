import { Component, OnInit } from '@angular/core';
import { CartService } from "../service/cart.service"

@Component({
  selector: 'app-product-shipping',
  templateUrl: './product-shipping.component.html',
  styleUrls: ['./product-shipping.component.less']
})
export class ProductShippingComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }
  shippingCosts = this.cartService.getShippingPrices()

  ngOnInit(): void {
  }

}
