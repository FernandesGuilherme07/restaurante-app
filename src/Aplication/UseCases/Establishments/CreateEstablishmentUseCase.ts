import EstablishmentRepository from "../../../Domain/Contracts/EstablishmenstRepository";
import Establishment from "../../../Domain/Entities/Establishment/Establishment";
import { AppError } from "../../Error/AppError";

interface IRequest {
  ownerName: string;
  ownersDocument: string;
  establishmentName: string;
  establishmentDocument: string;
  email: string;
  password: string;
  active: boolean;
}

export default class CreateEstablishmentUseCase {
  constructor(private establishmentsRepository: EstablishmentRepository) {}

  async execute(request: IRequest): Promise<void> {
    const establishment = new Establishment(request);
    const emailExists = await this.establishmentsRepository.GetByEmail(request.email)
    if(emailExists) {
      throw new AppError("Email existe!")
    }
    await this.establishmentsRepository.Create(establishment);
  }
}
