import {Component, Input} from '@angular/core';
import {Category, ProductModel} from "../models/product.models";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent {
  defaultProduct: ProductModel = {
    name: 'Default name',
    description: 'Default description',
    price: 0,
    category: Category.Fifth_Category,
    isAvailable: true,
    index: 100,
  }

  @Input() product: ProductModel = this.defaultProduct;
  constructor() { }
}
