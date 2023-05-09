import Entity from "../Entity";
import { AppError } from "../../../Aplication/Error/AppError";
import { IEstablishmentProps } from "./IEstablishmentProps";

export default class Establishment extends Entity {
  private _establishmentProps: Required<IEstablishmentProps>;

  constructor(establishmentProps: IEstablishmentProps) {
    super();
    this.DataValid(establishmentProps);
    this._establishmentProps = {
      ...establishmentProps,
      instagram: establishmentProps.instagram || "",
      logo: establishmentProps.logo || "",
      address: establishmentProps.address || null,
      primaryColor: establishmentProps.primaryColor || "",
      secondaryColor: establishmentProps.primaryColor || "",
      customers: establishmentProps.customers || [],
      products: establishmentProps.products || [],
      active: true,
    };
  }

  get establishmentProps() {
    return this._establishmentProps;
  }

  UpdatedEstablishmentProps(establishmentProps: IEstablishmentProps) {
    this.UpdatedAt();
    this._establishmentProps = {
      ...establishmentProps,
      instagram: establishmentProps.instagram || "",
      logo: establishmentProps.logo || "",
      address: establishmentProps.address || null,
      primaryColor: establishmentProps.primaryColor || "",
      secondaryColor: establishmentProps.primaryColor || "",
      customers: establishmentProps.customers || [],
      products: establishmentProps.products || [],
      active: true,
    };
  }

  get Customers() {
    return this.establishmentProps.customers;
  }

  AddCustomer(client: string) {
    this.UpdatedAt();
    this.establishmentProps.customers
      ? this.establishmentProps.customers.push(client)
      : (this.establishmentProps.customers = [client]);
  }

  get Products() {
    return this.establishmentProps.products;
  }

  AddProduct(product: string) {
    this.UpdatedAt();
    this.establishmentProps.products
      ? this.establishmentProps.products.push(product)
      : (this.establishmentProps.products = [product]);
  }

  private DataValid(establishmentProps: IEstablishmentProps) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const cepRegex = /^\d{5}\-?\d{3}$/;
    const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    if (!emailRegex.test(establishmentProps.email)) {
      throw new AppError("invalid Email!", 500);
    }
    if (!cnpjRegex.test(establishmentProps.establishmentDocument)) {
      throw new AppError("invalid Document!", 500);
    }
    if (
      establishmentProps.address &&
      !cepRegex.test(establishmentProps.address?.addressProps.zipcode)
    ) {
      throw new AppError("invalid Cep!", 500);
    }
    if (!cpfRegex.test(establishmentProps.ownersDocument)) {
      throw new AppError("invalid Owners Document (CPF)!", 500);
    }
  }
}
