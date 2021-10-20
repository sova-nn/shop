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
      }
    )

    this.cartService.totalSum$.subscribe((sum) => {
      this.totalSum = sum;
    })

    this.cartService.totalQuantity$.subscribe((quantity) => {
      this.totalQuantity = quantity;
    })
  }

  deleteProduct(id: number) {
    return this.cartService.removeProduct(id);
  }

  decreaseProductNumber(id: any) {
    return this.cartService.decreaseQuantity(id);
  }

  increaseProductNumber(id: number) {
    return this.cartService.increaseQuantity(id);
  }
}
