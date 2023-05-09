import CategoriesRepository from "../../../Domain/Contracts/CategoriesRepository";
import Category from "../../../Domain/Entities/Category/Category";

interface IRequest {
  establishmentId: string;
  name: string;
  description: string;
}

export default class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    establishmentId,
    name,
    description,
  }: IRequest): Promise<void> {
    const category = new Category(establishmentId, name, description);
    await this.categoriesRepository.Create(category);
  }
}
