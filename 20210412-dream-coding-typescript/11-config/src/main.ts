class Car {
  engine = 0;
  move() {
    const engine = this.engine + 1;
    debugger;
    console.log(engine);
  }
}

const car = new Car();
car.move();
