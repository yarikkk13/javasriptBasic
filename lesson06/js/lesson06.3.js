// // __________________________________________________________________________________________________________________
// //                                                                     Додатково
// // __________________________________________________________________________________________________________________
// //
// // Створити обєкт автомобіля з полями:
// // Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// class Car {
//     constructor(producer, powerEngine, owner, price, year) {
//         this.producer = producer;
//         this.powerEngine = powerEngine;
//         this.owner = owner;
//         this.price = price;
//         this.year = year
//     }
//     tuning () {
//         this.powerEngine = this.powerEngine*1.1
//     }
//     hiring(newDriver){
//         this.owner = newDriver
//     }
//
// }

// // Власник автомобіля теж має бути обєкт, у якого є поля
// class Owner {
//     constructor(name, age, experience) {
//         this.name = name;
//         this.age = age;
//         this.experience = experience
//     }
// }

// // Імя, вік, стаж водіння.
// let vasya = new Owner('vasya', 23,2);
// let petya = new Owner('petya', 26,1);
// let taras = new Owner('taras', 24,4);
// let olya = new Owner('olya', 28,8);
// let king = new Owner('king', 20,10);
// let vika = new Owner('vika', 29,7);
// let motrya = new Owner('motrya', 18,6);
// let vova = new Owner('vova', 43,4);
// let luigi = new Owner('luigi', 50,28);
// let winchester = new Owner('winchester', 28,11);

// // Створити не менше 7 та не більше 20 машинок.
// let porsche = new Car('porsche', 502, vasya, 12000, 2012);
// let bmw = new Car('bmw', 300, petya, 10000, 2010);
// let hyundai = new Car('hyundai', 350, taras, 8000, 2006);
// let honda = new Car('honda', 460, olya, 11000, 2011);
// let zapor = new Car('zaz',999 , king, 99999, 2021);
// let kia = new Car('kia', 230, vika, 2000, 1995);
// let bogdan = new Car('bogdan', 1000, motrya, 9999, 2021);
// let kalina = new Car('lada', 100, vova, 900, 2009);
// let ferrari = new Car('ferrari', 634, luigi, 10000, 2002);
// let impala = new Car('chevrolet', 425, winchester, 23000, 1967);

// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної
// // потужності).
// porsche.tuning();
// honda.tuning();
// zapor.tuning();
// bogdan.tuning();
// ferrari.tuning()

// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// porsche.hiring(petya);
// honda.hiring(motrya);
// zapor.hiring(taras);
// bogdan.hiring(vika);
// ferrari.hiring(winchester)

// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// let cars = [porsche, bmw, hyundai, honda, zapor,kia, bogdan,kalina,ferrari,impala];
// console.log(cars);

// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на
// // 10% та ціну на 5%
// let plusPowPlusPrice = cars.reduce((acc, value, i) => {
//     if (i % 2 === 0) {
//         console.log('______')
//         console.log(value)
//         value.powerEngine = 1.1 * value.powerEngine;
//         value.price = 1.05 * value.price;
//         console.log(value)
//         console.log('______')
//         acc.push(value)
//     }
//     return acc
// }, [])
// console.log(plusPowPlusPrice)

// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік
// // більший за 25,то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// let expVerification = cars.reduce((acc, value) => {
//     if (value.owner.experience < 5 && value.owner.age > 25) {
//         value.owner.experience = value.owner.experience + 1
//         console.log(value)
//     }
// }, 0)

// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let priceOfAllCars = cars.reduce((acc, value) => {
//     acc = acc + value.price
//     return acc
// },0);
// console.log(priceOfAllCars);


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// arrNum = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 9, 10];
// let num = +prompt('Введіть число: ');

// let min;
// let max;
// function minMaxIndex(array) {
//     min = array.indexOf(num);
//     max = array.lastIndexOf(num);
//     if (min === -1) {
//         return min
//     }
//     return [min, max]
// }
//
// console.log(minMaxIndex(arrNum));
// console.log(min);
// console.log(max);
// console.log('__________')


// let minimalIndex = arrNum.findIndex((value, index) => {
//     if (value === num) {
//         return index
//     }
// });
// console.log(minimalIndex)
// console.log('___________')//    тут лише шукає менший індекс

// let maxMinIndex = arrNum.reduce((acc, value, i) => {
//     if(value === num){
//         acc.push(i);
//     }
//     return acc
// },[])
// console.log('___________')
// console.log(maxMinIndex)
// let maxIndex = maxMinIndex[maxMinIndex.length-1];
// let minIndex = maxMinIndex[0];
// console.log(minIndex);
// console.log(maxIndex)//         тут якщо вводити через промпт чмсло якого немає в масиві, то виводиться пустий масив