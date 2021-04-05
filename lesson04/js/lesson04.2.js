// console.log('hello world')
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Word', [9,6,1], ['oops'], 9] -> [1, 3, 'Hello, 'Word', 9, 6, 1, 'oops', 9]


let mixedArr = [1, 3, ['Hello', 'Word', [9, 6, 1]], ['oops'], 9];
function vyrivnjator(multiLevelArray = []){
    let normArray = [];
let n;
for (let i = 0; i < multiLevelArray.length; i++) {
    n = multiLevelArray[i];
    if (typeof n === 'number' || typeof n === 'string') {
        normArray.push(n)
    } else {
        for (let nElement of n) {
            if (typeof nElement === 'number' || typeof nElement=== 'string') {
                normArray.push(nElement)
            }else {
                for (let nElementElement of nElement) {
                    normArray.push(nElementElement)
                }
            }
        }
    }
}
return normArray
}
console.log(vyrivnjator(mixedArr))


// let multiLevelArray = [1, 3, ['Hello', 'Word', [9, 6, 1]], ['oops'], 9];
// let normArray = [];
// let n;
// for (let i = 0; i < multiLevelArray.length; i++) {
//     n = multiLevelArray[i];
//     if (typeof n === 'number' || typeof n === 'string') {
//         normArray.push(n)
//     } else {
//         for (let nElement of n) {
//             if (typeof nElement === 'number' || typeof nElement=== 'string') {
//                 normArray.push(nElement)
//             }else {
//                 for (let nElementElement of nElement) {
//                     normArray.push(nElementElement)
//                 }
//             }
//         }
//     }
// }
// multiLevelArray = normArray;
// console.log(multiLevelArray)