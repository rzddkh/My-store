//product model
export class Product {
  id!: number;
  name: string = '';
  price!: number;
  url: string = '';
  description: string = '';
}
//items in cart model with their count
export class cartProduct {
  count: number = 0;
  id!: number;
  name: string = '';
  price!: number;
  url: string = '';
  description: string = '';
}
