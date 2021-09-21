import { Injectable } from "@angular/core";
import { Category, ProductModel } from "../models/product.models";

export const DEFAULT_PRODUCT_LIST: ProductModel[] = [
  {
    name: 'Книга 1',
    description: 'Невероятная книга о качках в качалке',
    price: 1330,
    category: Category.Fifth_Category,
    isAvailable: true,
    index: 0,
  },
  {
    name: 'Книга 2',
    description: 'Книга о вкусной и здоровой пище',
    price: 550,
    category: Category.Fourth_Category,
    isAvailable: true,
    index: 1,
  },
  {
    name: 'Книга 3',
    description: 'Странный триллер с хорошим финалом',
    price: 70000,
    category: Category.Third_Category,
    isAvailable: true,
    index: 2,
  },
  {
    name: 'Книга 4',
    description: 'Лучшая книга для людей без чувства юмора',
    price: 450,
    category: Category.Second_Category,
    isAvailable: true,
    index: 3,
  },
  {
    name: 'Книга 5',
    description: 'Для позитивно настроенных ленивцев',
    price: 250,
    category: Category.Fifth_Category,
    isAvailable: false,
    index: 4,
  }
]

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): ProductModel[] {
    return DEFAULT_PRODUCT_LIST;
  }
}
