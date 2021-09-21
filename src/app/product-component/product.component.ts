import {Component, OnInit, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    console.log('Ура! Товар куплен!');
    this.btnClick.emit();
  }

}
