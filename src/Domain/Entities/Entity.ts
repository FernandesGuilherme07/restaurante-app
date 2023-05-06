import { randomUUID } from "crypto";

export default class Entity {
     id: string = randomUUID();
     createdAt: Date = new Date();
     updatedAt: Date = new Date();
   
    UpdatedAt() {
        this.updatedAt = new Date();
    }

    get getProps() {
        return this
    }
}

console.log(new Entity().getProps)
