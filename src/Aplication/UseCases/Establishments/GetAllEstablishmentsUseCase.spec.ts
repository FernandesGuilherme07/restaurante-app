import EstablishmentsRepositoryInMemory from "../../../Infra/persistence/Repositories/InMemory/EstablishmentsRepositoryInMemory";
import CreateEstablishmentUseCase from "./CreateEstablishmentUseCase";
import GetAllEstablishmentsUseCase from "./GetAllEstablishmentsUseCase";

let establishmentsRepositoryInMemory: EstablishmentsRepositoryInMemory;
let getAllEstablishmentsUseCase: GetAllEstablishmentsUseCase;
let createEstablishmentUseCase: CreateEstablishmentUseCase;

describe("GetAllEstablishmentsUseCase", () => {
  beforeEach(() => {
    establishmentsRepositoryInMemory = new EstablishmentsRepositoryInMemory();
    getAllEstablishmentsUseCase = new GetAllEstablishmentsUseCase(establishmentsRepositoryInMemory);
    createEstablishmentUseCase =  new CreateEstablishmentUseCase(establishmentsRepositoryInMemory);
  });

  it("should be able to get all establishments", async () => {
    const request = {
        ownerName: 'John Doe',
        ownersDocument: '123.456.789-10',
        establishmentName: 'Doe Bakery',
        establishmentDocument: '12.345.678/0001-90',
        email: 'asas@example.com',
        password: "1245778",
        active: true,
      };
  
      await createEstablishmentUseCase.execute(request);
      const request2 = {
        ownerName: 'John Doe2',
        ownersDocument: '123.456.789-10',
        establishmentName: 'Doe Bakery',
        establishmentDocument: '12.345.678/0001-90',
        email: 'gfgf@example.com',
        password: "1245778",
        active: true,
      };
  
      await createEstablishmentUseCase.execute(request2);

    const establishments = await getAllEstablishmentsUseCase.execute();

    expect(establishments).toHaveLength(2);
    expect(establishments[0].establishmentProps.establishmentName).toBe('Doe Bakery');
  });
});
