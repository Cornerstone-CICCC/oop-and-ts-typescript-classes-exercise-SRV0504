"use strict";
/**
 * Exercise 2: Abstract Class
 */
class Appliance {
    constructor(brand) {
        this.brand = brand;
    }
    turnOn() {
        console.log(`${this.brand} is now ON`);
    }
}
class WashingMachine extends Appliance {
    energyConsumption() {
        return 2.5;
    }
}
class Refrigerator extends Appliance {
    energyConsumption() {
        return 1.2;
    }
}
// Driver code
const wm = new WashingMachine("LG");
wm.turnOn(); // LG is now ON
console.log("Energy:", wm.energyConsumption(), "kWh"); // Energy: 2.5 kWh
const fridge = new Refrigerator("Samsung");
fridge.turnOn(); // Samsung is now ON
console.log("Energy:", fridge.energyConsumption(), "kWh"); // Energy: 1.2 kWh
