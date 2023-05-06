import Entity from "../Entity";

export default class Product extends Entity {
    name: string;
    constructor(name: string) {
        super()
        this.name = name;
    }
}