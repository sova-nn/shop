import {Component, OnInit} from '@angular/core';
import {CartService, IProductsCart} from "../../services/cart.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: IProductsCart[] = [];
  totalSum = 0;
  totalQuantity = 0;

  constructor(
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartService.cartProducts$.subscribe((data) => {
      this.products = data;
      this.totalSum = this.cartService.getTotalSum(data);
      this.totalQuantity = this.getTotalQuantity(data);
      }
    )
  }

  getTotalQuantity(data: IProductsCart[]) {
    return data.reduce(function (accumulator, item) {
      return accumulator + item.quantity;
    }, 0);
  }

  deleteProduct(id: any) {
    this.products = this.products.filter((item) => item.product._id as number !== id );
    this.totalSum = this.cartService.getTotalSum(this.products);
    this.totalQuantity = this.getTotalQuantity(this.products);
  }

  decreaseProductNumber(id: any) {
    if (this.products[id].quantity === 1) {
      this.deleteProduct(id);
    } else {
      this.products.map((productItem) => {
        if (productItem.product._id === id) {
          productItem.quantity --;
        }
      });
      this.totalSum = this.cartService.getTotalSum(this.products);
      this.totalQuantity = this.getTotalQuantity(this.products);
    }
  }

  increaseProductNumber(id: any) {
    this.products.map((productItem) => {
      if (productItem.product._id === id) {
        productItem.quantity ++;
      }
    });
    this.totalSum = this.cartService.getTotalSum(this.products);
    this.totalQuantity = this.getTotalQuantity(this.products);
  }
}
