import Address from '../Address/Address';
import Client from '../Client/Client';
import Product from '../Product/Product';
import Establishment from './Establishment';
import { IEstablishmentProps } from './IEstablishmentProps';

describe('Establishment Entity', () => {
  let establishmentProps: IEstablishmentProps;
  let establishment: Establishment;

  beforeEach(() => {
    establishmentProps = {
      ownerName: 'John Doe',
      ownersDocument: '123.456.789-10',
      establishmentName: 'John\'s Cafe',
      establishmentDocument: '12.345.678/0001-90',
      email: 'johnscafe@example.com',
      address: new Address({
          street: 'Main Street',
          number: 123,
          complement: 'Apt 1',
          neighborhood: 'Downtown',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          zipcode: '10001-001',
        }),
      active: true,
    };
    establishment = new Establishment(establishmentProps);
  });

  describe('constructor', () => {
    it('should create a new Establishment instance', () => {
      expect(establishment).toBeInstanceOf(Establishment);
    });

    it('should throw an error if email is invalid', () => {
      establishmentProps.email = 'invalid-email';
      expect(() => {
        new Establishment(establishmentProps);
      }).toThrow('invalid Email!');
    });

    it('should throw an error if establishment document is invalid', () => {
      establishmentProps.establishmentDocument = 'invalid-document';
      expect(() => {
        new Establishment(establishmentProps);
      }).toThrow('invalid Document!');
    });

    it('should throw an error if address zipcode is invalid', () => {
      establishmentProps.address!.addressProps.zipcode = 'invalid-zipcode';
      expect(() => {
        new Establishment(establishmentProps);
      }).toThrow('invalid Cep!');
    });

    it('should throw an error if owners document (CPF) is invalid', () => {
      establishmentProps.ownersDocument = 'invalid-cpf';
      expect(() => {
        new Establishment(establishmentProps);
      }).toThrow('invalid Owners Document (CPF)!');
    });
  });

  describe('AddCustomer', () => {
    it('should add a new customer', () => {
      establishment.AddCustomer('Jane Doe');
      expect(establishment.Customers).toContain('Jane Doe');
    });
  });

  describe('AddProduct', () => {
    it('should add a new product', () => {
      establishment.AddProduct('Coffee');
      expect(establishment.Products).toContain('Coffee');
    });
  });

  describe('UpdatedEstablishmentProps', () => {
    it('should update establishment props', () => {
      const newEstablishmentProps: IEstablishmentProps = {
        ...establishmentProps,
        establishmentName: 'Jane\'s Cafe',
      };
      establishment.UpdatedEstablishmentProps(newEstablishmentProps);
      expect(establishment.establishmentProps.establishmentName).toEqual('Jane\'s Cafe');
    });
  });
});
