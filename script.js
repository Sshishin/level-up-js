class Man {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showName() {
        console.log(`Это имя ${this.name}, а это фамилия ${this.surname}`);
    }
}

const seniorDeveloper = new Man('Anna', 'Robihood');

console.log(seniorDeveloper.showName());


class Developer extends Man {
    constructor(width, height, name, surname) {
        super(name, surname);       //С помощью super мы наследуюем класс, свойства и методы класса
        this.width = width;
        this.height = height;
    }

    code(lang) {
        console.log(`${this.name} умеет писать на ${lang}`);
    }

    getSize() {
        console.log(`Это ширина ${this.width}, это высота ${this.height}`);
    }

    getValue(length) {
        console.log((this.width * this.height * length));
    }
}

const middleDeveloper = new Developer(100, 150, 'Inna', 'Spider');

console.log(middleDeveloper.showName());
console.log(middleDeveloper.code('javascript'));
console.log(middleDeveloper.getSize());
console.log(middleDeveloper.getValue(20));



// Замыкания это продвинутая форма инкапсуляции
// Замыкания это возможность доступа в переменным внешней функции из внутренней?

function Car () {       //Пример использования замыкания для создания приватных полей
    const fuel = 50
  
    return {
      get fuel () {
        return fuel
      },
  
      set fuel (value) {
        fuel = value
        if (value > 100) fuel = 100;
      }
    }
  }
  
  const car = new Car()
  console.log(car.fuel) // 50
  
  car.fuel = 3000
  console.log(car.fuel) // 100



  class Car {       //Тоже самое только на классах
    #fuel = 50
  
    get fuel () {
      return this.#fuel
    }
  
    set fuel (value) {
      this.#fuel = value
      if (value > 100) this.#fuel = 100
    }
  }
  
  const car = new Car()
  console.log(car.fuel) // 50
  
  car.fuel = 3000
  console.log(car.fuel) // 100