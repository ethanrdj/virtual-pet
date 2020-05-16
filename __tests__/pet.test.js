const Pet = require('../src/pet');

  describe('Pet constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('Pet constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('Pet constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
    it('increases the hunger by 5', () => {
      const pet = new Pet('Fido');
    
      pet.growUp();
    
      expect(pet.hunger).toEqual(5);
    });

    it('decreases the fitness by 3', () => {
      const pet = new Pet('Fido');
    
      pet.growUp();
    
      expect(pet.fitness).toEqual(7);
    });   
  });
  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
      });

      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
  });
  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');

      pet.hunger = 6;
      pet.feed();

      expect(pet.hunger).toEqual(3);
    });

    it('decreases the hunger with a minimum of 0', () => {
      const pet = new Pet('fido');

      pet.hunger = 2;
      pet.feed();

      expect(pet.hunger).toEqual(0);
    });
  })
  describe('checkUp', () => {
    it('when the fitness is 3 or less, it returns a string', () => {
      const pet = new Pet('fido');

      pet.fitness = 2;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I need a walk')
    });

    it('returns a string when hunger is equal to or greater than 5', () => {
      const pet = new Pet('fido');

      pet.hunger = 9;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I am hungry");
  });

    it('when fitness is 3 or less and hunger is 5 or more, it returns a string', () => {
      const pet = new Pet('fido');

      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
    });

    it('when fitness is 4 or more and hunger is 4 or less, it returns a string', () => {
      const pet = new Pet('fido');

      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();

      expect(pet.checkUp()).toBe('I feel great!')
    });
  });
