import CategoriesRepository from "../../../Domain/Contracts/CategoriesRepository";
import Category from "../../../Domain/Entities/Category/Category";

export default class GetCategoryByIdUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(id: string): Promise<Category> {
    const category = await this.categoriesRepository.GetById(id);
    return category;
  }
}
