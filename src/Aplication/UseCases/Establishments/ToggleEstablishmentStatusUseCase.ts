import EstablishmentsRepository from "../../../Domain/Contracts/EstablishmenstRepository";


export default class ToggleEstablishmentStatusUseCase {
  constructor(private establishmentRepository: EstablishmentsRepository) {}

  async execute(id: string, status: boolean): Promise<void> {
    const establishment = await this.establishmentRepository.GetById(id);
    if (!establishment) {
      throw new Error("Establishment not found");
    }
    establishment.UpdatedEstablishmentProps({
      ...establishment.establishmentProps,
      active: status,
    });
    await this.establishmentRepository.UpDate(establishment);
  }
}
