const inquirer = require("inquirer");
import { Car, Truck, Motorbike, Vehicle } from './Vehicle.ts';

async function main()  {
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

    let vehicle = new Vehicle("vehicle");

    if (vehicleType === 'Car') {
        const { doors } = await inquirer.prompt({
            type: 'number',
            name: 'doors',
            message: 'Enter number of doors:'
        });
        vehicle = new Car(name, doors);
        console.log(`Created: ${vehicle.displayInfo()}`);
    } else if (vehicleType === 'Truck') {
        const { capacity } = await inquirer.prompt({
            type: 'number',
            name: 'capacity',
            message: 'Enter truck capacity in tons:'
        });
        vehicle = new Truck(name, capacity);
        console.log(`Created: ${vehicle.displayInfo()}`);
    } else if (vehicleType === 'Motorbike') {
        const { type } = await inquirer.prompt({
            type: 'input',
            name: 'type',
            message: 'Enter motorbike type:'
        });
        vehicle = new Motorbike(name, type);
        console.log(`Created: ${vehicle.displayInfo()}`);
    }
    
}

async function selectVehicle() {

    let corvette = new Car("Chevrolet Covette", 2);
    let mustang = new Car("Ford Mustang", 4);
    let f150 = new Truck("Ford F150", 2.5 );
    let hummer = new Truck("GMC Hummer", 1.75);
    let roadGlide = new Motorbike("Harley Davidson Road Glide", "American Touring");
    let katana = new Motorbike("Suzuki Katana", "sport motorcycle");

    let vehicles = [corvette, f150, roadGlide, mustang, hummer, katana]
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
