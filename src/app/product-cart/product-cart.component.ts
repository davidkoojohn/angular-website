import { Component, OnInit } from '@angular/core';
import { CartService } from "../service/cart.service"
import { IProduct } from "../products"

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.less']
})
export class ProductCartComponent implements OnInit {
  constructor(
    private cartService: CartService
  ) { }

  items: IProduct[] = this.cartService.getItems()

  ngOnInit(): void {
    console.log(this.items)
  }

}
