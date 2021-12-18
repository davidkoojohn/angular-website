import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Products as products, IProduct } from "../products"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get("productId"))
    console.log(productIdFromRoute)
    this.product = products.find(item => item.id === productIdFromRoute)
  }

}
