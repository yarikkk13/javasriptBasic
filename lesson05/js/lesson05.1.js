// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// class Computer {
//     constructor(name, ram, cpu) {
//         this.name = name;
//         this.ram = ram;
//         this.cpu = cpu
//     }
//
//     turnOn() {
//         console.log('PC is turned on')
//     }
// }
// let pc1 = new Computer('windows', 2, 999);
// pc1.turnOn()

// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// class Laptop extends Computer {
//     constructor(name, ram, cpu, display) {
//         super(name, ram, cpu);
//         this.display = display
//     }
//
//     batteryWork() {
//         return this.cpu / (this.display * this.ram)
//     }
// }
// let laptop1 = new Laptop('win', 12, 234, 15);
// laptop1.turnOn()
// console.log(laptop1.batteryWork())

// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// class Ultrabook extends Laptop {
//     constructor(name, ram, cpu, display, weight) {
//         super(name, ram, cpu, display);
//         this.weight = weight
//     }
//
//     turnOn() {
//         if (this.weight > 2 || this.batteryWork() < 4) {
//             console.error('error')
//         } else {
//             console.log('Ultrabook is turned on')
//         }
//     }
// }
// let ultra1 = new Ultrabook('win', 1, 999, 10, 1.5);
// let ultra2 = new Ultrabook('win', 1, 999, 10, 4);
// let ultra3 = new Ultrabook('win', 8, 10, 15, 1.5)
//
// ultra2.turnOn()
// ultra1.turnOn()
// ultra3.turnOn()
// console.log(typeof ultra2.batteryWork())

// ===
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// class BasicPC extends Computer {
//     constructor(name, ram, cpu) {
//         super(name, ram, cpu);
//     }
//
//     startGame(enterGame) {
//         let fpsCount = this.cpu / this.ram;
//         console.log(`You are playing ${enterGame} with ${fpsCount} FPS`)
//     }
//
//     upgradeCpu(percent) {
//         if (percent > 10) {
//             console.error('error')
//         } else {
//             return this.cpu = this.cpu + this.cpu * percent / 100
//         }
//     }
//
//     upgradeRam() {
//         return this.ram = 2 * this.ram
//     }
//
// }
//
// let bPC = new BasicPC('win', 2, 888)
// bPC.upgradeCpu(1);
// console.log(bPC);
// bPC.startGame('FarCry');
// bPC.upgradeRam();
// console.log(bPC)
// bPC.turnOn()

// ===
// Від базового ПК необхідно зробити ігнорий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// що на цьому відрі ігри не запускаються.
//
// class GamePC extends BasicPC{
//     constructor(name,ram,cpu) {
//         super(name,ram,cpu);
//         if(this.cpu<500||this.ram<8){
//             console.error('на цьому відрі ігри не запускаються')
//         }
//     }
//
//     startGame(enterGame){
//         return this.cpu = this.cpu - 0.001 * this.cpu
//     }
// // не розумію, що цією умовою хочуть 'Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК', вона ж залежить
// // від введених ram і cpu
// }
// let gamePC = new GamePC('win', 8,500);
// console.log(gamePC)
// gamePC.startGame('FAR_CRY')
// console.log(gamePC)

