import inquirer from 'inquirer';
import { Car } from './Car';
import { Truck } from './Truck';
import { Motorbike } from './Motorbike';

const vehicles: Vehicle[] = [];

async function main() {
    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Create New Vehicle', 'Select Existing Vehicle', 'Exit']
        });

        if (action === 'Exit') break;

        if (action === 'Create New Vehicle') {
            await createVehicle();
        } else {
            await selectVehicle();
        }
    }
}

async function createVehicle() {
    const { vehicleType } = await inquirer.prompt({
        type: 'list',
        name: 'vehicleType',
        message: 'Select vehicle type:',
        choices: ['Car', 'Truck', 'Motorbike']
    });

    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter vehicle name:'
    });

    let vehicle: Vehicle;

    if (vehicleType === 'Car') {
        const { doors } = await inquirer.prompt({
            type: 'number',
            name: 'doors',
            message: 'Enter number of doors:'
        });
        vehicle = new Car(name, doors);
    } else if (vehicleType === 'Truck') {
        const { capacity } = await inquirer.prompt({
            type: 'number',
            name: 'capacity',
            message: 'Enter truck capacity in tons:'
        });
        vehicle = new Truck(name, capacity);
    } else if (vehicleType === 'Motorbike') {
        const { type } = await inquirer.prompt({
            type: 'input',
            name: 'type',
            message: 'Enter motorbike type:'
        });
        vehicle = new Motorbike(name, type);
    }

    vehicles.push(vehicle);
    console.log(`Created: ${vehicle.displayInfo()}`);
}

async function selectVehicle() {
    if (vehicles.length === 0) {
        console.log('No vehicles available.');
        return;
    }

    const { vehicleIndex } = await inquirer.prompt({
        type: 'list',
        name: 'vehicleIndex',
        message: 'Select an existing vehicle:',
        choices: vehicles.map((v, index) => ({ name: v.displayInfo(), value: index }))
    });

    const selectedVehicle = vehicles[vehicleIndex];
    console.log(`Selected: ${selectedVehicle.displayInfo()}`);
    // Further actions can be implemented here
}

main().catch(console.error);
