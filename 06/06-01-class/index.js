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

const myMonster1 = new Monster(20);
myMonster1.attack();
myMonster1.run(); //날아다니자!!

const myMonster2 = new Monster(50);
myMonster2.attack();
myMonster2.run(); //달려가자!!
