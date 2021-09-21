import {Component, OnInit} from '@angular/core';
import { ProductModel } from "../models/product.models";
import { ProductService } from "../services/products.service";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(
    public productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log('products', this.products);
  }

  trackById(_index: number, obj: ProductModel): number {
    return obj.index;
  }
}
