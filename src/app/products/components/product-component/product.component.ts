import {Component, OnInit, Output, EventEmitter, Input,} from '@angular/core';
import {ProductModel} from "../../../models/product.models";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products!: ProductModel[];
  @Output() addToCartClick = new EventEmitter();
  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  onAddToCart(product: ProductModel): void {
    console.log('Ура! Товар куплен!');
    this.addToCartClick.emit(product);
  }

  trackById(index: number, product: ProductModel): number {
    const id = product._id as number;
    return id;
  }

}
