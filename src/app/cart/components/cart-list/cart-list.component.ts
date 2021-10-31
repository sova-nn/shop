import {Component, OnInit} from '@angular/core';
import {CartService, IProductsCart} from "../../services/cart.service";
import {OrderByPipe} from "../../../shared/pipes/order-by.pipe";

const ORDER = [
  { id: 0, label: 'цене', value: 'price' },
  { id: 1, label: 'количеству', value: 'value' },
  { id: 2, label: 'описанию', value: 'description' }
];

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [OrderByPipe],
})
export class CartListComponent implements OnInit {
  products: IProductsCart[] = [];
  totalSum = 0;
  totalQuantity = 0;
  order = ORDER;
  selected: 'name' | 'price' | 'description' | 'quantity' = 'name';
  isAsc = true;

  constructor(
    public cartService: CartService,
    private pipe: OrderByPipe,
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

  selectChange() {
    this.products = this.pipe.transform(this.products, this.selected, this.isAsc);
  }

  onToggle() {
    this.isAsc = !this.isAsc;
    this.selectChange();
  }
}
