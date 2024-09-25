export class Vehicle {
    constructor(public name: string) {}
    displayInfo(): string {
        return `Vehicle Name: ${this.name}`;
    }
}

export class Car extends Vehicle {
    constructor(name: string, public doors: number) {
        super(name);
    }
    displayInfo(): string {
        return `${super.displayInfo()}, Doors: ${this.doors}`;
    }
}

export class Truck extends Vehicle {
    constructor(name: string, public capacity: number) {
        super(name);
    }
    displayInfo(): string {
        return `${super.displayInfo()}, Capacity: ${this.capacity} tons`;
    }
    tow(): string {
        return `${this.name} is towing a trailer.`;
    }
}

export class Motorbike extends Vehicle {
    constructor(name: string, public type: string) {
        super(name);
    }
    displayInfo(): string {
        return `${super.displayInfo()}, Type: ${this.type}`;
    }
}
