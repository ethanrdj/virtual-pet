// Constants
const initialAge = 0;
const initialHunger = 0;
const initialFitness = 10;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = initialFitness;
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.fitness > 0 && this.hunger < 10;
  }
};

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  };

  Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
    }
  }

Pet.prototype.feed = function() {
  if ((this.hunger - 3) >= MINIMUM_HUNGER) {
    this.hunger -= 3
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
}

Pet.prototype.checkUp = function() {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return 'I am hungry AND I need a walk'
  }
  else if (this.fitness <= 3) {
    return "I need a walk"
  }
  else if (this.hunger >= 5) {
    return 'I am hungry'
  }
  else {
    return 'I feel great!'
  }
} 
const pet = new Pet("Darth Coder");

module.exports = Pet;