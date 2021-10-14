import {Injectable} from "@angular/core";
import {ProductModel} from "../../models/product.models";
import {BehaviorSubject, Observable} from "rxjs";

export interface IProductsCart {
  product: ProductModel,
  quantity: number,
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public readonly cartProducts$ = new BehaviorSubject<IProductsCart[]>([]);

  get products() {
    return this.cartProducts$.getValue();
  }

  addProductToCart(product: ProductModel) {
    const products = this.cartProducts$.getValue();
    const productAddedIndex = products.findIndex((item) => item.product._id === product._id);

    if(productAddedIndex < 0) {
      products.push({product, quantity: 1});
    } else {
      products[productAddedIndex].quantity++;
    }
    this.cartProducts$.next(products);
  }



  getTotalSum(products: IProductsCart[]) {
    return products.reduce(function (accumulator, item) {
      return accumulator + item.product.price*item.quantity;
    }, 0);
  }
}
