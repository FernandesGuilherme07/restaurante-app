import Establishment from "../Entities/Establishment/Establishment";

export default interface EstablishmentsRepository {
  Create(value: Establishment): Promise<void>;
  Get(): Promise<Establishment[]>;
  UpDate(value: Establishment): Promise<void>;
  GetById(id: string): Promise<Establishment>;
  GetByEmail(email: string): Promise<Establishment | null>;
  ToggleStatus(id: string, status: boolean): Promise<void>;
}
