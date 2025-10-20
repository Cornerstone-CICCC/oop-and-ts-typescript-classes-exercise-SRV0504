"use strict";
/**
 * Exercise 1: Access Modifiers
 */
class Smartphone {
    constructor(brand, batteryLevel, os) {
        this.brand = brand;
        this.batteryLevel = Math.min(100, batteryLevel);
        this.os = os;
    }
    charge(amount) {
        this.batteryLevel = Math.min(100, this.batteryLevel + amount);
    }
    showInfo() {
        console.log(`${this.brand}, Battery: ${this.batteryLevel}%, OS: ${this.os}`);
    }
}
class AndroidPhone extends Smartphone {
    upgradeOS(newOS) {
        this.os = newOS;
    }
}
// Driver code
const phone = new AndroidPhone("Samsung", 50, "Android 12");
phone.charge(30);
phone.upgradeOS("Android 13");
phone.showInfo();
// Expected output: Samsung, Battery: 80%, OS: Android 13
