class Maruthi {
  constructor(cars, model) {
    this.maruthi_cars = cars;
    this.maruthi_model = model;
  }
  Info1() {
    console.log(
      "These are some list of maruthi cars" +
        this.maruthi_cars +
        "whose model is" +
        " " +
        this.maruthi_model
    );
  }
}
class Brand {
  constructor(name, location) {
    this.brand_name = name;
    this.brand_location = location;
  }
  Info2() {
    console.log(
      "The name of the brand is ," +
        this.brand_name +
        ", and it is located in" +
        this.brand_location
    );
  }
}

let brand1 = new Brand("Maruthi_Suzuki", "Nellore");
let brand2 = new Brand("Maruthi_Suzuki", "Kadapa");

let cars = [];

cars.push(brand1);
cars.push(brand2);

let suzuki = new Maruthi(cars, 2022);

console.log(suzuki);

suzuki.Info1();
