import {Pipe, PipeTransform} from "@angular/core";
import {IProductsCart} from "../../cart/services/cart.service";

@Pipe({
  name: 'order'
})
export class OrderByPipe implements PipeTransform {
  transform(array: IProductsCart[], field: 'name' | 'price' | 'description' | 'quantity', isAsc: boolean = true): IProductsCart[] {
    if(field === 'quantity') {
      return this.sortByCartField(array, field, isAsc);
    } else return this.sortByProductField(array, field, isAsc);
  }

    private sortByCartField(array: IProductsCart[], field: 'quantity', isAsc = true): IProductsCart[] {
      const sortBy =  isAsc ? 1 : -1;
      Array.isArray(array) && array.sort((a: IProductsCart, b: IProductsCart) => {
        if (a[field] < b[field]) {
          return -sortBy;
        }
        else if (a[field] > b[field]) {
          return sortBy;
        }
        else {
          return 0;
        }
      });
      return array;
    }

    private sortByProductField(array: IProductsCart[], field: 'name' | 'price' | 'description', isAsc: boolean = true): IProductsCart[] {
      const sortBy =  isAsc ? 1 : -1;
      Array.isArray(array) && array.sort((a: IProductsCart, b: IProductsCart) => {
        if (a.product[field] < b.product[field]) {
          return -sortBy;
        }
        else if (a.product[field] > b.product[field]) {
          return sortBy;
        }
        else {
          return 0;
        }
      });
      return array;
    }

}
