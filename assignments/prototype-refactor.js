/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor (attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }

    destroy(){return `${this.name} was removed from the game.`;}
}
  

class CharacterStats extends GameObject {
    constructor (attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
    }

    takeDamage(){return `${this.name} took damage.`}
}


class Humanoid extends CharacterStats {
    constructor (attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    }

    greet (){return `${this.name} offers a greeting in ${this.language}.`;}
}
  
  
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
  
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});
  
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});
  
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  

  
class Villain extends Humanoid{
    constructor (attributes){
    super(attributes);
    }
}
  
class Hero extends Humanoid{
    constructor (attributes){
    super(attributes);
    }
}
  
const nightKing = new Villain({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 8,
    },
    healthPoints: 10,
    name: 'Night King',
    team: 'White Walkers',
    weapons: [
    'Undead',
    'Spears',
    ],
    language: 'Skroth',
});
  
const aryaStark = new Hero({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 11,
    name: 'Arya Stark',
    team: 'House Stark',
    weapons: [
    'Faceless',
    'Needle',
    ],
    language: 'English',
});
  
function fight (villain, hero){
    let largerHealth;
    let winner;
    let loser;
    function matchHealth() {
    if( hero.healthPoints >= villain.healthPoints ){
    return largerHealth = hero.healthPoints;
    }else{return largerHealth = villain.healthPoints;}
    }
    matchHealth();

    for( let i = 1; i < largerHealth; i++){
        console.log(`${villain.takeDamage()}and health remains ${villain.healthPoints-i}`);
        
        if(villain.healthPoints-i == 0){
            winner = hero;
            loser = villain;
            break;
        }

        console.log(`${hero.takeDamage()}and health remains ${hero.healthPoints-i}`);
        
        if(hero.healthPoints-i == 0){
            winner = villain;
            loser = hero;
            break;
        }

    }

    console.log(`${loser.destroy()} and ${winner.name} won!`)
}
  
fight(nightKing,aryaStark);
