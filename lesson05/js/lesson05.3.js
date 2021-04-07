// _______________________________________________________________________________________________________________
//                                                                     Додатково
// _______________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }

// function CreateAtr(name, specification){
//     this.name = name;
//     this.specification = specification;
//     this.description = function (){
//         console.log(this)
//     }
// }
// function CreateTag(name, specification, atr){
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function (){
//         console.log(this)
//     }
// }const atr1 = new CreateAtr('accesskey', 'Активация ссылки с помощью комбинации клавиш');
// const atr2 = new CreateAtr('coords', 'Устанавливает координаты активной области');
// const atr3 = new CreateAtr('download', 'Предлагает скачать указанный по ссылке файл');
// const spec = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок'
// const a = new CreateTag('<a>',spec,[atr1,atr2,atr3])
// a.description()


// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }


// class CreateAtr {
//     constructor(name, specification) {
//         this.name = name;
//         this.specification = specification;
//     }
//
//     description () {
//         console.log(this)
//     }
// }
//
// class CreateTag {
//     constructor(name, specification, atr) {
//         this.name = name;
//         this.specification = specification;
//         this.atr = atr;
//     }
//
//     description () {
//         console.log(this)
//     }
// }
//
// const atr1 = new CreateAtr('accesskey', 'Активация ссылки с помощью комбинации клавиш');
// const atr2 = new CreateAtr('coords', 'Устанавливает координаты активной области');
// const atr3 = new CreateAtr('download', 'Предлагает скачать указанный по ссылке файл');
// const spec = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок'
// const a = new CreateTag('<a>', spec, [atr1, atr2, atr3])
// a.description()

// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     manufacturer: 'audi',
//     model: 'a6',
//     year: 2010,
//     maxSpeed: 220,
//     capacity: 2.5,
//     driver: 'noName',
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info(){console.log(`
//         manufacturer: ${this.manufacturer},
//         model: ${this.model},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},
//         driver: ${this.driver}`)
//     },
//     increseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed
//     },
//     addDriver(newDriver){
//         this.driver = newDriver
//     }
// }
// car.info()
// car.drive()
// car.increseMaxSpeed(350)
// car.addDriver({name:'Taras', age: 23})
// car.info()
// console.log(car.driver)








