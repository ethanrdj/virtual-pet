// Constants
const initialAge = 0;
const initialHunger = 0;
const initialFitness = 10;
const MAXIMUM_AGE = 30;
const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const PROMPT_HUNGRY = 5;
const PROMPT_UNFIT = 3;

function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = initialFitness;
}

Pet.prototype = {
  get isAlive() {
    return this.age < MAXIMUM_AGE && this.fitness > MINIMUM_FITNESS && this.hunger < MAXIMUM_HUNGER;
  }
};

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger += 5;
  if ((this.fitness - 3) >= MINIMUM_FITNESS){
    this.fitness -= 3;
  } else {
    this.fitness = MINIMUM_FITNESS;
  }
  };

  Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
    }
  }

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.hunger - 3) >= MINIMUM_HUNGER) {
    this.hunger -= 3
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
}

Pet.prototype.checkUp = function() {
  if (this.fitness <= PROMPT_UNFIT && this.hunger >= PROMPT_HUNGRY) {
    return 'I am hungry AND I need a walk'
  }
  else if (this.fitness <= PROMPT_UNFIT) {
    return "I need a walk"
  }
  else if (this.hunger >= PROMPT_HUNGRY) {
    return 'I am hungry'
  }
  else {
    return 'I feel great!'
  }
} 
const pet = new Pet("Darth Coder");

module.exports = Pet;