/**
 * Exercise 2: Abstract Class
 */

abstract class Appliance {
    public brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  
    public turnOn(): void {
      console.log(`${this.brand} is now ON`);
    }
  
    public abstract energyConsumption(): number;
  }
  
  class WashingMachine extends Appliance {
    public energyConsumption(): number {
      return 2.5;
    }
  }
  
  class Refrigerator extends Appliance {
    public energyConsumption(): number {
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
  