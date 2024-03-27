/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Car from "./Car.js";

const car1 = new Car("BMW", 2002, "navy blue", 4, true);
const car2 = new Car("Lambo", 2004, "black", 2, false);
console.log("Lambo: ", car2, "BMW:", car1);
