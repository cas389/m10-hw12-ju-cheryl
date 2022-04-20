// YOUR CODE HERE

// Create a class named Car in JavaScript.
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // call mySweetRide's honk method once
  honk() {
    console.log('Beep Beep!');
  }
  // call mySweetRide's performMaintenance method once
  performMaintenance() {
    setTimeout (function () {
      console.log('Maintenance Complete');
    }, 3000)
  }
}

// Create a variable named mySweetRide and assign it a car created with your class
var mySweetRide = new Car("Pontiac", "Fiero", 1988);
mySweetRide.honk();
mySweetRide.performMaintenance();
