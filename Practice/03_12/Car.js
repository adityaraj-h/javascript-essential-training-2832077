// creating class car

class Car {
  constructor(
    // parameters
    name,
    year,
    colour,
    doors,
    ignitionStatus
  ) {
    // properties
    this.name = name;
    this.year = year;
    this.colour = colour;
    this.doors = doors;
    this.ignitionStatus = ignitionStatus;
  }

  toggleIgnition(newStatus) {
    this.ignitionStatus = newStatus;
  }

  changeColour(newColour) {
    this.colour = newColour;
  }
}

export default Car;
