export class Vehicle {
    constructor(public name: string) {}
    displayInfo(): string {
        return `Vehicle Name: ${this.name}`;
    }
}
