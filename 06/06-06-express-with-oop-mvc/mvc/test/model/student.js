class Student {
  #name = '';
  #age = 0;

  info(name, age) {
    this.#name = name;
    this.#age = age;
  }
  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}
