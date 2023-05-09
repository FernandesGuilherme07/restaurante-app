import { AppError } from "../../../../Aplication/Error/AppError";
import EstablishmenstRepository from "../../../../Domain/Contracts/EstablishmenstRepository";
import Establishment from "../../../../Domain/Entities/Establishment/Establishment";
import { IEstablishmentProps } from "../../../../Domain/Entities/Establishment/IEstablishmentProps";

export default class establishmentsRepositoryInMemory
  implements EstablishmenstRepository
{
  private establishments: Establishment[];

  constructor() {
    this.establishments = [];
  }

  async Create(value: Establishment): Promise<void> {
    this.establishments.push(value);
  }

  async Get(): Promise<Establishment[]> {
    return this.establishments;
  }

  async GetById(id: string): Promise<Establishment> {
    const establishment = this.establishments.find(
      (establishment) => establishment.id === id
    );
    if (!establishment) {
      throw new AppError("Establishment not found", 401);
    }
    return establishment;
  }

  async GetByEmail(email: string): Promise<Establishment | null> {
    const establishment = this.establishments.find(
      (establishment) => establishment.establishmentProps.email === email
    );
    if (!establishment) {
      return null;
    }
    return establishment;
  }

  async UpDate(value: Establishment): Promise<void> {
    const establishmentIndex = this.establishments.findIndex(
      (establishment) => establishment.id === value.id
    );
    if (establishmentIndex === -1) {
      throw new AppError("Establishment not found", 401);
    }
    this.establishments[establishmentIndex] = value;
  }

  async ToggleStatus(id: string, status: boolean): Promise<void> {
    const establishmentIndex = this.establishments.findIndex(
      (establishment) => establishment.id === id
    );
    if (establishmentIndex === -1) {
      throw new AppError("Establishment not found", 401);
    }
    this.establishments[establishmentIndex].UpdatedEstablishmentProps({
      active: status,
    } as IEstablishmentProps);
  }
}
