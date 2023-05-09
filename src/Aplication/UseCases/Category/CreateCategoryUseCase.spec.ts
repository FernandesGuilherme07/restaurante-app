import CategoriesRepositoryInMemory from "../../../Infra/persistence/Repositories/InMemory/CategoriesRepositoryInMemory";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("CreateCategoryUseCase", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const request = {
      establishmentId: "1",
      name: "Category Test",
      description: "Category Test Description",
    };

    await createCategoryUseCase.execute(request);

    const categories = await categoriesRepositoryInMemory.Get();

    expect(categories.length).toBe(1);
    expect(categories[0].name).toBe(request.name);
  });
});
