import {Injectable} from "@angular/core";
import {ProductModel} from "../../models/product.models";
import {BehaviorSubject, Observable} from "rxjs";

export interface IProductsCart {
  product: ProductModel,
  quantity: number,
}

const CHANGE_QUANTITY_NUMBER = 1;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public readonly cartProducts$ = new BehaviorSubject<IProductsCart[]>([]);
  public readonly totalQuantity$ = new BehaviorSubject<number>(0);
  public readonly totalSum$ = new BehaviorSubject<number>(0);
  public readonly isEmptyCart$ = new BehaviorSubject<boolean>(true);

  get products() {
    return this.cartProducts$.getValue();
  }

  getTotalQuantity(data: IProductsCart[]) {
    return data.reduce(function (accumulator, item) {
      return accumulator + item.quantity;
    }, 0);
  }

  getTotalSum(products: IProductsCart[]) {
    return products.reduce(function (accumulator, item) {
      return accumulator + item.product.price*item.quantity;
    }, 0);
  }

  getProducts() {
    return this.cartProducts$.getValue();
  }

  addProduct(product: ProductModel) {
    const products = this.cartProducts$.getValue();
    const productAddedIndex = products.findIndex((item) => item.product._id === product._id);

    if(productAddedIndex < 0) {
      products.push({product, quantity: 1});
    } else {
      products[productAddedIndex].quantity++;
    }
    this.updateCartData(products);
    this.cartProducts$.next(products);
    this.isEmptyCart$.next(false);
  }

  removeProduct(productId: number) {
    const products = this.cartProducts$.getValue();
    const productsFiltered = products.filter((item) => item.product._id !== productId);
    this.updateCartData(productsFiltered);
    this.cartProducts$.next(productsFiltered);
    !productsFiltered.length && this.isEmptyCart$.next(true);
  }

  increaseQuantity(id: number) {
    const products = this.cartProducts$.getValue();
    const productId = products.findIndex((item) => item.product._id === id);
    const changedProduct = this.changeQuantity(products[productId], CHANGE_QUANTITY_NUMBER);
    products[productId] = changedProduct;

    this.updateCartData(products);
    this.cartProducts$.next(products);
  }

  decreaseQuantity(id: number) {
    const products = this.cartProducts$.getValue();
    const productId = products.findIndex((item) => item.product._id === id);

    const changedProduct = this.changeQuantity(products[productId], -CHANGE_QUANTITY_NUMBER);
    if (changedProduct.quantity === 0) {
      return this.removeProduct(id);
    } else {
      products[productId] = changedProduct;

      this.updateCartData(products);
      this.cartProducts$.next(products);
    }
  }

  private changeQuantity(product: IProductsCart, num: number): IProductsCart {
    if (num > 0) {
      product.quantity = product.quantity + num;
    } else if (num < 0) {
      product.quantity = (product.quantity > Math.abs(num)) ? (product.quantity + num) : 0;
    }
    return product;
  }

  private updateCartData(products: IProductsCart[]): void {
    const totalSum = this.getTotalSum(products);
    const totalQuantity = this.getTotalQuantity(products);

    this.totalSum$.next(totalSum);
    this.totalQuantity$.next(totalQuantity);
  }

  removeAllProducts(): void {
    this.cartProducts$.next([]);
    this.isEmptyCart$.next(true);
  }
}
