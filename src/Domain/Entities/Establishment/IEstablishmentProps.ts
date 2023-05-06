import Address from "../Address/Address";

export type IEstablishmentProps = {
    ownerName: string;
    ownersDocument: string;
    establishmentName: string;
    establishmentDocument: string;
    email: string;
    password: string;
    instagram?: string;
    logo?: string;
    primaryColor?: string;
    secondaryColor?: string;
    customers?: string[];
    products?: string[];
    active: boolean;
    address?: Address | null;
}