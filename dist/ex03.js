"use strict";
/**
 * Exercise 3: Singleton
 *
 * Instructions:
 * - Create a singleton class `Counter`
 *   - private constructor
 *   - private static instance property
 *   - public static getInstance() method
 * - Methods:
 *   - `increment()` increases the counter
 *   - `getCount()` returns the current count
 */
class Counter {
    // Constructor privado impide instanciar directamente
    constructor() {
        this.count = 0;
    }
    // Método público para acceder a la única instancia
    static getInstance() {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }
    increment() {
        this.count++;
    }
    getCount() {
        return this.count;
    }
}
const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();
counter1.increment(); // count = 1
counter1.increment(); // count = 2
counter2.increment(); // count = 3
console.log(counter1.getCount()); // 3
console.log(counter2.getCount()); // 3
console.log(counter1 === counter2); // true
