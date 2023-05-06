import Entity from "../Entity";

export default class Client extends Entity {
     name: string;
    constructor(name: string) {
        super()
        this.name = name;
    }
}