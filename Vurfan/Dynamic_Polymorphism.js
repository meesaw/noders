//!===============================Overriding Method==========================

class Animal {
  constructor(name, family) {
    this.animal_name = name;
    this.animal_family = family;
  }
  eats() {
    console.log(
      this.animal_name +
        " " +
        ", eats food and belongs to " +
        this.animal_family
    );
  }
}

class Cat extends Animal {
  constructor(name, family) {
    super(name, family);
  }
  eats() {
    console.log(
      this.animal_name +
        " " +
        ", eats meat and belongs to " +
        this.animal_family
    );
  }
}

let animal1 = new Cat("Lion", "Cat-Family");
let animal2 = new Cat("Tiger", "Cat-Family");

animal1.eats();
animal2.eats();

console.log(animal1);
console.log(animal2);
