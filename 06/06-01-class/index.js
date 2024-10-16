class Date {
  qqq = 3;

  constructor() {
    this.date = new window.Date();
  }

  getFullYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.date.getMonth();
  }
}

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
