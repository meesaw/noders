class Bike {
  constructor(name, color, cc, version, model) {
    this.bike_name = name;
    this.bike_color = color;
    this.bike_cc = cc;
    this.bike_version = version;
    this.bike_model = model;
  }
  start() {
    console.log(
      this.bike_name +
        " " +
        "is my favourite bike with color" +
        " " +
        this.bike_color
    );
  }
}

class Yamaha extends Bike {
  constructor(name, color, cc, version, model, type) {
    super(name, color, cc, version, model);
    this.bike_type = type;
  }
  stop() {
    console.log(
      this.start() +
        " " +
        ",and it has" +
        " " +
        this.bike_cc +
        " " +
        "which is launced in" +
        " " +
        this.bike_model
    );
  }
}

let Details1 = new Yamaha("FZ", "Red", "150cc", "bs4", 2011, "Sports");

let Details2 = new Yamaha("R15", "Black", "150cc", "bs4", "2019", "Sports");

console.log(Details1);
console.log(Details2);

Details1.stop();
Details2.stop();
