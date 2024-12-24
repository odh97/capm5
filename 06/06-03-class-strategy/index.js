class skyParts {
  run = () => {
    console.log('날라서 도망가자');
  };
}

class groundParts {
  run = () => {
    console.log('달려서 도망가자');
  };
}

class groundParts2 {
  run = () => {
    console.log('달려서 도망가자 2222');
  };
}

class Monster {
  parts = null;

  constructor(parts) {
    this.parts = parts;
  }

  setParts = (parts) => {
    this.parts = parts;
  };

  run = () => {
    this.parts.run();
  };
}

const myMonster1 = new Monster(new skyParts());
myMonster1.run();

const myMonster2 = new Monster(new groundParts());
myMonster2.run(); // 달려서 도망가자

myMonster2.setParts(new groundParts2());
myMonster2.run(); // 달려서 도망가자 2222
