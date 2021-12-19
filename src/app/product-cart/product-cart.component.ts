import { Component, OnInit } from '@angular/core';
import { CartService } from "../service/cart.service"
import { FormBuilder } from "@angular/forms"
import { IProduct } from "../products"

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.less']
})
export class ProductCartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  items: IProduct[] = this.cartService.getItems()
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  })

  ngOnInit(): void {
    console.log(this.items)
  }

  onSubmit(): void {
    this.items = this.cartService.clearItems()
    console.warn('Your order has been submitted: ', this.checkoutForm.value);
    this.checkoutForm.reset()
  }
}
