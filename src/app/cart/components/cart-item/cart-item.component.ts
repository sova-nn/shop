import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {IProductsCart} from "../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() productItem: IProductsCart;
  @Output() minusBtnClicked = new EventEmitter();
  @Output() plusBtnClicked = new EventEmitter();
  @Output() deleteBtnClicked = new EventEmitter();
  constructor() {}

  minusBtnClick(): void {
    this.minusBtnClicked.emit();
  }

  plusBtnClick(): void {
    this.plusBtnClicked.emit();
  }

  deleteBtnClick(): void {
    this.deleteBtnClicked.emit();
  }

}
