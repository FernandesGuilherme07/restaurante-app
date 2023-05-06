import EstablishmentsRepository from "../../../Domain/Contracts/EstablishmenstRepository";
import Establishment from "../../../Domain/Entities/Establishment/Establishment";

export default class GetEstablishmentByIdUseCase {
  constructor(private establishmentsRepository: EstablishmentsRepository) {}

  async execute(id: string): Promise<Establishment> {
    const establishment = await this.establishmentsRepository.GetById(id);

    if (!establishment) {
      throw new Error("Establishment not found");
    }

    return establishment;
  }
}
