import Category from "../Entities/Category/Category";

export default interface CategoriesRepository {
  Create(value: Category): Promise<void>;
  Get(): Promise<Category[]>;
  GetAllByEstablishment(establishmentId: string): Promise<Category[]>;
  UpDate(value: Category): Promise<void>;
  GetById(id: string): Promise<Category>;
}
