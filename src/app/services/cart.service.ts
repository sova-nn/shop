import {Injectable} from "@angular/core";
import {ProductModel} from "../models/product.models";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _products: ProductModel[] = [];

  set products(products: ProductModel[]) {
    this._products = products;
  }

  get products() {
    return this._products;
  }

  getProductsList(products: ProductModel[]) {
    return products.map((product) => product.name);
  }

  getTotalSum(products: ProductModel[]) {
    return products.reduce(function (accumulator, product) { return accumulator + product.price }, 0);
  }
}
