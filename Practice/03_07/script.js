/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  name: "lenovo ideapad 5",
  size: "small",
  length: 14,
  colour: "black",
  keys: {
    alphabets: 45,
    numbers: 10,
  },
  screenOpen: true,
  changeScreen: function (screenStatus) {
    this.screenOpen = screenStatus;
  },

  browser: "chrome",
};
console.log("The screenOpen is currently:", laptop.screenOpen);
console.log("Size of laptop:", laptop.size);
console.log(laptop);
laptop.changeScreen(false);
console.log("The screenOpen is currently:", laptop.screenOpen);

console.log(laptop);
