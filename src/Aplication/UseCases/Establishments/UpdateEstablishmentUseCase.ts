import EstablishmentsRepository from "../../../Domain/Contracts/EstablishmenstRepository";
import { IEstablishmentProps } from "../../../Domain/Entities/Establishment/IEstablishmentProps";
import { AppError } from "../../Error/AppError";

export default class UpdateEstablishmentUseCase {
  constructor(private establishmentRepository: EstablishmentsRepository) {}

  async execute(id: string, establishmentProps: IEstablishmentProps): Promise<void> {
    const establishment = await this.establishmentRepository.GetById(id);

    if (!establishment) {
      throw new AppError("Establishment not found", 401);
    }

    establishment.UpdatedEstablishmentProps(establishmentProps);

    await this.establishmentRepository.UpDate(establishment);
  }
}
