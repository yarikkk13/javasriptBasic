// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(manufacturer, model, year, maxSpeed, capacity) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = 'noName'
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`
//         manufacturer: ${this.manufacturer},
//         model: ${this.model},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},
//         driver: ${this.driver}`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed
//     };
//     this.changeYear = function (newYear) {
//         this.year=newYear
//     };
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver
//     };
// }
// let car = new Car('audi','a6',2012,220,2.5)
// console.log(car);
// car.drive();
// car.info()
// car.increaseMaxSpeed(399);
// car.addDriver('vasya');
// car.changeYear(2016)
// car.info();
// console.log(car.driver)

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(manufacturer, model, year, maxSpeed, capacity) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = 'noName'
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`
//         manufacturer: ${this.manufacturer},
//         model: ${this.model},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},
//         driver: ${this.driver}`)
//     }
//
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed
//     }
//
//     changeYear(newYear) {
//         this.year = newYear
//     }
//
//     addDriver(newDriver) {
//         this.driver = newDriver
//     }
// }
//
// let car = new Car('audi', 'a6', 2012, 220, 2.5)
// console.log(car);
// car.drive();
// car.info()
// car.increaseMaxSpeed(399);
// car.addDriver('vasya');
// car.changeYear(2016)
// car.info();
// console.log(car.driver)

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
// }
//
// class Cinderrela extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize
//     }
//
//     info() {
//         console.log(`
//         name: ${name},
//         age: ${this.age},
//         footSize: ${this.footSize}`)
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, shoeFound) {
//         super(name, age);
//         this.shoeFound = shoeFound;
//     }
//
//     info() {
//         console.log(`
//         name: ${name},
//         age: ${this.age},
//         shoeFound: ${this.shoeFound}`)
//     }
//
//     searching(array) {
//         for (let element of array) {
//             if (prince.shoeFound === element.footSize) {
//                 console.log(element)
//             }
//         }
//     }
//
// }
//
// let prince = new Prince('vasya', 22, 36.5);
// let cinderrella = new Cinderrela('anya', 18, 38);
// let arrCinderella = [
//     new Cinderrela('anya', 18, 38),
//     new Cinderrela('tanya', 20, 37.5),
//     new Cinderrela('vika', 21, 37),
//     new Cinderrela('cinderella', 19, 36.5),
//     new Cinderrela('ksyuha', 20, 36),
//     new Cinderrela('karina', 24, 35.5),
//     new Cinderrela('arina', 19, 35),
//     new Cinderrela('meri', 18, 38.5),
//     new Cinderrela('alina', 20, 39),
//     new Cinderrela('elina', 26, 39.5)
// ];
// console.log(prince.age);
// console.log(cinderrella.age);
// prince.info();
// cinderrella.info();
// prince.searching(arrCinderella)

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// function Cinderrela(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//     this.info = function (){
//         console.log(`
//         name: ${name},
//         age: ${age},
//         footSize: ${footSize}`)
//     }
// }
//
//
// function Prince(name,age,shoeFound){
//     this.name = name;
//     this.age = age;
//     this.shoeFound = shoeFound;
//
//     this.info = function (){
//         console.log(`
//         name: ${name},
//         age: ${age},
//         shoeFound: ${shoeFound}`)
//     }
//
//     this.searching = function (array){
//         for (let element of array) {
//             if (prince.shoeFound === element.footSize){
//                 console.log(element)
//             }
//         }
//     }
// }
// let prince = new Prince('vasya',22,36.5);
// let cinderrella = new Cinderrela('anya', 18, 38)
// let arrCinderella = [
//     new Cinderrela('anya', 18, 38),
//     new Cinderrela('tanya', 20, 37.5),
//     new Cinderrela('vika', 21, 37),
//     new Cinderrela('cinderella', 19, 36.5),
//     new Cinderrela('ksyuha', 20, 36),
//     new Cinderrela('karina', 24, 35.5),
//     new Cinderrela('arina', 19, 35),
//     new Cinderrela('meri', 18, 38.5),
//     new Cinderrela('alina', 20, 39),
//     new Cinderrela('elina', 26, 39.5)
// ];
// console.log(prince.age);
// console.log(cinderrella.age);
// prince.info();
// cinderrella.info();
// prince.searching(arrCinderella)