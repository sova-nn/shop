export enum Category {
  First_Category = 'First category',
  Second_Category = 'Second category',
  Third_Category = 'Third category',
  Fourth_Category = 'Fourth category',
  Fifth_Category = 'Fifth category',
}

export interface ProductModel {
  name: string,
  description: string,
  price: number,
  category: Category,
  isAvailable: boolean,
  _id: number,
}
