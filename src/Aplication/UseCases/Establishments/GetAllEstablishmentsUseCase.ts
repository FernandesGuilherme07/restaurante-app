
import EstablishmentsRepository from "../../../Domain/Contracts/EstablishmenstRepository";
import Establishment from "../../../Domain/Entities/Establishment/Establishment";

export default class GetAllEstablishmentsUseCase {
  constructor(private establishmentsRepository: EstablishmentsRepository) {}

  async execute(): Promise<Establishment[]> {
    return this.establishmentsRepository.Get();
  }
}
