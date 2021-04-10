// __________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// __________________________________________________________________________________________________________________
//
//
// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hatchback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hatchback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :

// // - двигун більше 3х літрів
// let more3L = cars.filter(value => {
//     if (value.volume>3){
//         console.log(value)
//         return value
//     }
// });
// console.log(more3L)

// // - двигун = 2л
// let volEqual2 = cars.filter(value => {
//     if (value.volume===2){
//         console.log(value)
//         return value
//     }
// })
// console.log(volEqual2);

// // - виробник мерс
// let mercCars = cars.filter(value => {
//     if (value.producer === 'mercedes'){
//         console.log(value);
//         return value
//     }
// })
// console.log(mercCars)

// // - двигун більше 3х літрів + виробник мерседес
// let volMore3ProdMerc = cars.filter(value => {
//     if (value.producer === 'mercedes' && value.volume>3){
//         console.log(value);
//         return value
//     }
// })
// console.log(volMore3ProdMerc);

// // - двигун більше 3х літрів + виробник субару
// let volMore3ProdSub = cars.filter(value => {
//     if (value.producer === 'subaru' && value.volume > 3){
//         console.log(value)
//         return value
//     }
// })
// console.log(volMore3ProdSub);

// // - сили більше ніж 300
// let powOver300 = cars.filter(value => {
//     if (value.power>300){
//         console.log(value)
//         return value
//     }
// })
// console.log(powOver300);

// // - сили більше ніж 300 + виробник субару
// let powOver300ProdSub = cars.filter(value => {
//     if (value.power > 300 && value.producer === 'subaru'){
//         console.log(value);
//         return value
//     }
// })
// console.log(powOver300ProdSub);

// // - мотор серіі ej
// let engineEj = cars.filter(value => {
//     if (value.engine.startsWith('ej') ){
//         console.log(value);
//         return value
//     }
// })
// console.log(engineEj);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let powProdEng = cars.filter(value => {
//     if (value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')){
//         console.log(value);
//         return value
//     }
// })
// console.log(powProdEng);

// // - двигун меньше 3х літрів + виробник мерседес
// let engProd = cars.filter(value => {
//     if (value.volume<3 && value.producer === 'mercedes'){
//         console.log(value);
//         return value
//     }
// })
// console.log(engProd);

// // - двигун більше 2л + сили більше 250
// let engPow = cars.filter(value => {
//     if (value.volume>2 && value.power > 250){
//         console.log(value);
//         return value
//     }
// })
// console.log(engPow);

// // - сили більше 250  + виробник бмв
// let powProd = cars.filter(value => {
//     if (value.power>250 && value.producer === 'bmw'){
//         console.log(value);
//         return value
//     }
// })
// console.log(powProd)


// // - взять слдующий массив
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// // -- Відсортувати їх по ID
// let byId = usersWithAddress.sort((a, b) => {
//     if (a.id>b.id){
//         return 1
//     } return -1
// })
// console.log(byId)

// // -- Відсортувати їх по ID в зворотньому порядку
// let byIdReverse = usersWithAddress.sort((a, b) => {
//     if (a.id<b.id){
//         return 1
//     } return -1
// })
// console.log(byIdReverse)

// // -- Відсортувати по віку
// let byAge = usersWithAddress.sort((a, b) => {
//     if (a.age>b.age){
//         return 1
//     } return -1
// })
// console.log(byAge)

// // -- Відсортувати по віку в зворотньому порядку
// let byAgeReverse = usersWithAddress.sort((a, b) => {
//     if (a.age<b.age){
//         return 1
//     } return -1
// })
// console.log(byAgeReverse)

// // -- Відсорутвати по імені
// let byName = usersWithAddress.sort((a, b) => {
//     if (a.name>b.name){
//         return 1
//     } return -1
// })
// console.log(byName)

// // -- Відсорутвати по назві вулиці
// let byAdress = usersWithAddress.sort((a, b) => {
//     if (a.address.street>b.address.street){
//         return 1
//     } return -1
// })
// console.log(byAdress)

// -- Відсорутвати по номеру будинку
// let byAdrNum = usersWithAddress.sort((a, b) => {
//     if (a.address.number>b.address.number){
//         return 1
//     } return -1
// })
// console.log(byAdrNum)

// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let younger30 = usersWithAddress.filter(value => {
//     if (value.age<30){
//         console.log(value)
//         return value
//     }
// })
// console.log(younger30);

// // -- Залишити тільки одружених
// let married = usersWithAddress.filter(value => {
//     if (value.isMarried === true){
//         console.log(value)
//         return value
//     }
// })
// console.log(married);

// // -- Залишити тільки одружених, які молодні за 30
// let marriedYoung = usersWithAddress.filter(value => {
//     if (value.isMarried === true && value.age<30){
//         console.log(value)
//         return value
//     }
// })
// console.log(marriedYoung);

// // -- Залишити лише тих, в кого парні номери будинків.
// let numHouseParity = usersWithAddress.filter(value => {
//     if (value.address.number%2 === 0){
//         console.log(value)
//         return value
//     }
// })
// console.log(numHouseParity);

// // -- Порахувати загальний вік всіх людей. (reduce)
// let sumOfage = usersWithAddress.reduce((acc, value) => {
//     acc = acc + value.age;
//     return acc
// }, 0)
// console.log(sumOfage)

// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let marriedOldGetChild = usersWithAddress.reduce((acc, value) => {
//     if (value.age>30 && value.isMarried === true){
//         acc.push(value)}
//     return acc
// },[])
// console.log(marriedOldGetChild)