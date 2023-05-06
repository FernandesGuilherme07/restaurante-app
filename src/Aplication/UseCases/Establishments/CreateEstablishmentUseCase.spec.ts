import EstablishmentsRepositoryInMemory from "../../../Infra/persistence/Repositories/InMemory/EstablishmentsRepositoryInMemory";
import CreateEstablishmentUseCase from "./CreateEstablishmentUseCase";

describe('CreateEstablishmentUseCase', () => {
  it('should create a new establishment', async () => {
    const establishmentRepository = new EstablishmentsRepositoryInMemory();
    const createEstablishmentUseCase = new CreateEstablishmentUseCase(
      establishmentRepository,
    );

    const request = {
      ownerName: 'John Doe',
      ownersDocument: '123.456.789-10',
      establishmentName: 'Doe Bakery',
      establishmentDocument: '12.345.678/0001-90',
      email: '1fgrfg@example.com',
      password: "1245778",
      active: true,
    };

    await createEstablishmentUseCase.execute(request);

    const establishments = await establishmentRepository.Get();
    expect(establishments.length).toBe(1);
    expect(establishments[0].establishmentProps.establishmentName).toBe(
      request.establishmentName,
    );
  });
});
