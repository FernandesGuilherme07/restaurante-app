import { randomUUID } from "crypto";
import Product from "../Product/Product";
import Entity from "../Entity";

export default class Category extends Entity {
    private name: string;
    private description?: string;
    private establishment_id: string;
    constructor(establishmentId: string, name: string, description?: string){
        super()
        this.name = name;
        this.description = description;
        this.establishment_id = establishmentId;
    }
}