import Entity from "../Entity";

export default class Category extends Entity {
  name: string;
  description?: string;
  establishment_id: string;
  constructor(establishmentId: string, name: string, description?: string) {
    super();
    this.name = name;
    this.description = description;
    this.establishment_id = establishmentId;
  }
}
