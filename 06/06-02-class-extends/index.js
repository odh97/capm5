class Monster {
  power = 10;

  constructor({ qqq }) {
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
  name = '';

  constructor({ name, qqq }) {
    // super()는 부모의 생성자를 호출하는 것
    super({ qqq: qqq - 2 });
    this.name = name;
  }

  // 오버라이딩(부모의 run 메소드를 재정의 - 덮어쓰기)
  run = () => {
    console.log('날아다니자!!');
  };
}

// 지상몬스터
class groundMonster extends Monster {
  name = '';

  constructor({ name, qqq }) {
    // super()는 부모의 생성자를 호출하는 것
    super({ qqq: qqq });
    this.name = name;
  }

  // 오버라이딩(부모의 run 메소드를 재정의 - 덮어쓰기)
  run = () => {
    console.log('달려가자!!');
  };
}

const myMonster1 = new skyMonster({ name: '하늘몬스터', qqq: 20 });
myMonster1.attack();
myMonster1.run();

const myMonster2 = new groundMonster({ name: '지상몬스터', qqq: 50 });
myMonster2.attack();
myMonster2.run();
