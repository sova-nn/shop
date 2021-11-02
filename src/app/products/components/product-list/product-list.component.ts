import {Component, OnInit} from '@angular/core';
import { ProductModel } from "../../../models/product.models";
import { ProductService } from "../../services/products.service";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$ = this.productService.getProducts();

  constructor(
    public productService: ProductService,
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    // })
    ;
  }

  addToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
