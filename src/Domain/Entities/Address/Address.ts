import { AppError } from "../../../Aplication/Error/AppError";
import Entity from "../Entity";

  
export type IAddressProps = {
street: string;
number: number;
complement?: string;
neighborhood: string;
city: string;
state: string;
country: string;
zipcode: string;
}

export default class Address extends Entity {
private _addressProps: IAddressProps;

constructor(addressProps: IAddressProps) {
    super();
    this.validate(addressProps);
    this._addressProps = addressProps;
}

get addressProps(): IAddressProps {
    return this._addressProps;
}

private validate(addressProps: IAddressProps): void {
    if (!addressProps.street) {
    throw new AppError('Street is required');
    }

    if (!addressProps.number) {
    throw new AppError('Number is required');
    }

    if (!addressProps.neighborhood) {
    throw new AppError('Neighborhood is required');
    }

    if (!addressProps.city) {
    throw new AppError('City is required');
    }

    if (!addressProps.state) {
    throw new AppError('State is required');
    }

    if (!addressProps.country) {
    throw new AppError('Country is required');
    }

    if (!addressProps.zipcode) {
    throw new AppError('Zipcode is required');
    }
}
}
