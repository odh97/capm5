class Car {
  #engine = 'off';
  brand = '';
  wheels = 0;

  constructor(band, wheels) {
    this.brand = band;
    this.wheels = wheels;
  }

  drive() {
    this.#driveEngine();
    console.log(`정보 ${this.brand}(휠 ${this.wheels}개) 드라이브 시작!`);
  }

  #driveEngine() {
    console.log('engine on!!');
    this.#engine = 'on';
  }

  stop() {
    console.log(`${this.brand} - 차량 정지`);
    this.#engine = 'off';
  }

  openWindow() {
    console.log('창문 열기');
  }
}

const bmw = new Car('BMW', 4);
bmw.drive();
bmw.openWindow();
bmw.stop();

console.log('=====================================');

class Truck extends Car {
  constructor(brand, wheels) {
    super(brand, wheels);
  }

  dump(item) {
    if (item) {
      console.log(`${item}를 내리다`);
    }
    console.log('dump');
  }

  drive() {
    super.drive();
    console.log('!!트럭 드라이브 가속 모드!!');
  }

  openWindow() {
    console.log('트럭 창문 열기');
  }
}

const volvo = new Truck('Volvo', 6);
volvo.drive();
volvo.openWindow();
volvo.stop();
volvo.dump();
volvo.dump('돌맹이');
