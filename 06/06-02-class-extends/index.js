class Monster {
  power = 10;

  constructor(qqq) {
    this.power = qqq;
  }

  attack = () => {
    console.log('공격하자!!');
    console.log('내 공격력은 ' + this.power + '야!!!');
  };

  run = () => {
    console.log('도망가자!!');
  };
}

// 공중몬스터
class skyMonster extends Monster {
  run = () => {
    console.log('날아다니자!!');
  };
}

// 지상몬스터
class groundMonster extends Monster {
  run = () => {
    console.log('달려가자!!');
  };
}

const myMonster1 = new skyMonster(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new groundMonster(50);
myMonster2.attack();
myMonster2.run();
