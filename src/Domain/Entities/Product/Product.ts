import Category from "../Category/Category";
import Entity from "../Entity";

export default class Product extends Entity {
  name: string;
  description: string;
  price: number;
  establishmentId: string;
  categories: Category[];
  discount?: number;
  constructor(
    name: string,
    description: string,
    price: number,
    establishmentId: string,
    categories: Category[],
    discount?: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.price = price;
    this.establishmentId = establishmentId;
    this.categories = categories;
    this.discount = discount;
  }
}
