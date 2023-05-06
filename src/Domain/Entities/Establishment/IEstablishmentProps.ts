import Address from "../Address/Address";

export type IEstablishmentProps = {
    ownerName: string;
    ownersDocument: string;
    establishmentName: string;
    establishmentDocument: string;
    email: string;
    instagram?: string;
    logo?: string;
    primaryColor?: string;
    secondaryColor?: string;
    customers?: string[];
    products?: string[];
    active: true;
    address?: Address | null;
}