import { Injectable } from '@angular/core';
import { IProduct, Products } from "../products"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = []
  constructor() { }

  addToCart(product: IProduct) {
    this.items.push(product)
  }

  getItems() {
    return this.items
  }

  clearItems() {
    this.items = []
    return this.items
  }
}
