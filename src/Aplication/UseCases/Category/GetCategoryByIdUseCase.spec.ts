import Category from "../../../Domain/Entities/Category/Category";
import CategoriesRepositoryInMemory from "../../../Infra/persistence/Repositories/InMemory/CategoriesRepositoryInMemory";
import { AppError } from "../../Error/AppError";
import GetCategoryByIdUseCase from "./GetCategoryByIdUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let getCategoryByIdUseCase: GetCategoryByIdUseCase;

describe("Get Category By Id", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    getCategoryByIdUseCase = new GetCategoryByIdUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to get a category by id", async () => {
    const category = new Category("1", "Category", "category test");

    await categoriesRepositoryInMemory.Create(category);

    const result = await getCategoryByIdUseCase.execute(category.id);

    expect(result).toHaveProperty("id");
    expect(result.name).toBe(category.name);
  });

  it("should not be able to get a non-existing category by id", async () => {
    await expect(
      getCategoryByIdUseCase.execute("non-existing-id")
    ).rejects.toBeInstanceOf(AppError);
  });
});
