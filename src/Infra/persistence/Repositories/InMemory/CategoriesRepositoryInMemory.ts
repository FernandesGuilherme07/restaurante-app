import { AppError } from "../../../../Aplication/Error/AppError";
import CategoriesRepository from "../../../../Domain/Contracts/CategoriesRepository";
import Category from "../../../../Domain/Entities/Category/Category";

export default class CategoriesRepositoryInMemory
  implements CategoriesRepository
{
  private Categories: Category[];

  constructor() {
    this.Categories = [];
  }

  async GetAllByEstablishment(establishmentId: string): Promise<Category[]> {
    const Categories = this.Categories.filter(
      (category) => category.establishment_id === establishmentId
    );
    if (!Categories) {
      throw new AppError("Establishment not found categories.", 401);
    }
    return Categories;
  }

  async Create(value: Category): Promise<void> {
    this.Categories.push(value);
  }

  async Get(): Promise<Category[]> {
    return this.Categories;
  }

  async UpDate(value: Category): Promise<void> {
    const CategoryIndex = this.Categories.findIndex(
      (Category) => Category.id === value.id
    );
    if (CategoryIndex === -1) {
      throw new AppError("Category not found", 401);
    }
    this.Categories[CategoryIndex] = value;
  }

  async GetById(id: string): Promise<Category> {
    const category = this.Categories.find((category) => category.id === id);
    if (!category) {
      throw new AppError("category not found", 401);
    }
    return category;
  }
}
