import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lng: parseFloat(faker.address.longitude()),
            lat: parseFloat(faker.address.latitude()),

        }
    }
}