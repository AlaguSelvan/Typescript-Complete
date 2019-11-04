class Vehicle {
  constructor(protected color: string) {
    this.color = color
  }
  protected honk(): void {
    console.log('beep')
  }
}

// Inheritance
// inherits Vehicle class
class Car1 extends Vehicle {
  constructor(public wheels: number, public color: string) {
    // use super to initialize constructor in child class
    super('red');
  }
  private drive(): void {
    console.log(`vroom`)
  }
  public startDrivingProcess(): void {
    this.drive()
  }
  public startHonkingProcess(): void {
    this.honk()
  }
  public getColor(): void {
    console.log(this.color)
  }
}

const vehicle = new Car1(4, 'red');
vehicle.getColor();
vehicle.startDrivingProcess();
vehicle.startHonkingProcess();
