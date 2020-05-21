// Constants
const initialAge = 0;
const initialHunger = 0;
const initialFitness = 10;

//Maximums and Minimums
const MAXIMUM_AGE = 30;
const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;

//Prompts
const PROMPT_HUNGRY = 5;
const PROMPT_UNFIT = 3;

class Pet {
constructor(name) {
this.name = name;
this.age = initialAge;
this.hunger = initialHunger;
this.fitness = initialFitness;
this.children = [];
}

get isAlive() {
    return this.age < MAXIMUM_AGE && this.fitness > MINIMUM_FITNESS && this.hunger < MAXIMUM_HUNGER;
    };
};

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    this.age += 1;
    this.hunger += 5;
    if ((this.fitness - 3) >= MINIMUM_FITNESS) {
        this.fitness -= 3;
    }
    else {
        this.fitness = MINIMUM_FITNESS;
    };
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    }
    else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    };
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    }
    else {
        this.hunger = MINIMUM_HUNGER;
    };
};  

Pet.prototype.checkUp = function() {
    const petsHungry = "I am hungry";
    const petNeedsWalk = "I need a walk";
    if (this.fitness <= PROMPT_UNFIT && this.hunger >= PROMPT_HUNGRY) {
        return `${petsHungry} AND ${petNeedsWalk}`;
    }
    else if (this.fitness <= PROMPT_UNFIT) {
        return `${petNeedsWalk}`;
    }
    else if (this.hunger >= PROMPT_HUNGRY) {
        return `${petsHungry}`;
    }
    else {
        return 'I feel great!';
    };
};

Pet.prototype.adoptChild = function(child){
    if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
    else {
        this.children.push(child)
    }
};

Pet.prototype.haveBaby = function(childName) {
    if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
    else {
        this.children.push(new Pet(childName))
    };
};



//const pet = new Pet('Darth Coder');
module.exports = Pet;