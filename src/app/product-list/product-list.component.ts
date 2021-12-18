import { Component, OnInit } from '@angular/core';
import { Products } from "../my-store/products"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products = Products
  constructor() { }

  ngOnInit(): void {
  }

  share(product: any) {
    console.log(product)
  }

  onNotify() {
    console.log('You will be notified when the product goes on sale');
  }

}
