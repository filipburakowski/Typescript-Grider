import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude()),
    };
  }
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string {
    return `User Name ${this.name}`;
  }
}
