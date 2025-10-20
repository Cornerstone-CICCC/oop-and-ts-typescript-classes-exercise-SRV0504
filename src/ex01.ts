/**
 * Exercise 1: Access Modifiers
 */

class Smartphone {
    public brand: string;
    private batteryLevel: number;
    protected os: string;
  
    constructor(brand: string, batteryLevel: number, os: string) {
      this.brand = brand;
      this.batteryLevel = Math.min(100, batteryLevel);
      this.os = os;
    }
  
    public charge(amount: number): void {
      this.batteryLevel = Math.min(100, this.batteryLevel + amount);
    }
  
    public showInfo(): void {
      console.log(`${this.brand}, Battery: ${this.batteryLevel}%, OS: ${this.os}`);
    }
  }
  
  class AndroidPhone extends Smartphone {
    public upgradeOS(newOS: string): void {
      this.os = newOS;
    }
  }
  
  // Driver code
  const phone = new AndroidPhone("Samsung", 50, "Android 12");
  phone.charge(30);
  phone.upgradeOS("Android 13");
  phone.showInfo(); 
  // Expected output: Samsung, Battery: 80%, OS: Android 13
  