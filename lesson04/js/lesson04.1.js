// console.log('hello world')

// // 1) створити функцію яка приймає масив та виводить його
// let arrMix = [12, 'js', 45, true, 17, 'python', 23, false, 0];
//
// function arrays(enterArray){
//     console.log(enterArray)
// }
// arrays(arrMix);

// // 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// // Для виведення використати попередню функцію.
// function arRandoMaker(min,max,amount){
//     let arrNum = [];
//     for (let i = 0; i < amount; i++) {
//     let n = Math.floor(Math.random() * (max - min + 1)) + min;
//     arrNum.push(n);
//     }
//     arrays(arrNum)
// }
// arRandoMaker(0,45,15)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(first,second,third){
//     if (first>third && second>third){
//     console.log(third)
// }else if(first>second && third>second){
//     console.log(second)
// }else{
//     console.log(first)
// }}
// minNumber(1423,34334,4234234);


// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber(first,second,third){
//     if (first<third && second<third){
//     console.log(third)
// }else if(first<second && third<second){
//     console.log(second)
// }else{
//     console.log(first)
// }}
// maxNumber(1423,34334,4234234);

// // 5) створити функцію яка повертає найбільше число з масиву

// function maxNum(array=[]){
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (max<array[i]){
//             max = array[i];
//         }
//     }return max
// }
// let arrNum = [23, 323, 43434, 43439, 2323, 23232, 4435, 5434, 3, 597060];
// console.log(maxNum(arrNum))

// // 6) створити функцію яка повертає найменьше число з масиву

// function minNum(array=[]){
//     let min = array[array.length-1];
//     for (let i = array.length-2; i >= 0; i--) {
//         if (min>array[i]){
//             min = array[i];
//         }
//     }return min
// }
// let arrNum = [23, 323, 43434, 43439, 2323, 23232, 4435, 5434, 3, 0, -3];
// console.log(minNum(arrNum))

// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let arrNum = [12, -12, 45, 0, 17, -17, 23, -23, 0];
//
// function summing(enterArray = []){
//     let sum = 0;
//     for (let i = 0; i < enterArray.length; i++) {
//         sum=sum+enterArray[i]
//     }return sum
// }
// console.log(summing(arrNum));


// // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrNum = [12, -12, 45, 0, 17, -17, 23, -23, 0];
//
// function arithmeticMean(enterArray = []){
//     let sum = 0;
//     for (let i = 0; i < enterArray.length; i++) {
//         sum=sum+enterArray[i]
//     }return sum/enterArray.length
// }
// console.log(arithmeticMean(arrNum));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function objToKeys(enterArrayOfObjects = []) {
//     let returnArr = [];
//     for (const enterArrayOfObject of enterArrayOfObjects) {
//         for (let enterArrayOfObjectsKey in enterArrayOfObject) {
//             returnArr.push(enterArrayOfObjectsKey)
//         }
//     }return returnArr
// }
// console.log(objToKeys(arrObj))
//вроді код працює, тільки неможу зрозуміти чого показує таку помилку 'Possible iteration over unexpected
// (custom / inherited) members, probably missing hasOwnProperty check' і як її зафіксити

//
// for (const arrObjElement of arrObj) {
//     for (let arrObjElementKey in arrObjElement) {
//         console.log(arrObjElementKey)
//     }
// }

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function returnValues(arrayOfObjects = []) {
//     let arrOfValuesArr = [];
//     let arrOfvalues = [];
//     let value;
//     for (const arrObjElement of arrayOfObjects) {
//         arrOfValuesArr.push(Object.values(arrObjElement))
//     }
//     for (const arrOfValue of arrOfValuesArr) {
//         for (let arrOfValueElement of arrOfValue) {
//             value = arrOfValueElement;
//             arrOfvalues.push(value)
//         }
//     }
// return arrOfvalues
// }
// let values = returnValues(arrObj)
// console.log(values)// завдання то вирішив, але точно є якийсь простіший спосіб це зробити, бо не знаю як напряму
//достукатись до значень обєкта, для мене це перебирання значень обєкту якась абракадабра


// let arrOfValuesArr = [];
// let arrOfvalues = [];
// let a;
// for (const arrObjElement of arrObj) {
//     arrOfValuesArr.push(Object.values(arrObjElement))
// }
// for (const arrOfValue of arrOfValuesArr) {
//     for (let arrOfValueElement of arrOfValue) {
//         a = arrOfValueElement;
//         arrOfvalues.push(a)
//     }
// }console.log(arrOfvalues)


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// const arr1 = [1, 2, 3, 4];
// const arr2 = [2, 3, 4, 5];

// function summing(array1 = [], array2 = []){
//     let arr3 = [];
//     for (let i = 0; i < array1.length; i++) {
//         let arr3Element = array1[i] + array2[i];
//         arr3.push(arr3Element)
//     }return arr3
// }
// let arr3 = summing(arr1,arr2);
// console.log(arr3)


// let arr3 = [];
// if (arr1.length > arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (typeof arr2[i] === 'number') {
//             let arr3Element = arr1[i] + (arr2[i]);
//             arr3.push(arr3Element);
//         } else {
//             arr2[i] = 0;
//             let arr3Element = arr1[i] + (arr2[i]);
//             arr3.push(arr3Element);
//         }
//     }
// }else{
//     for (let i = 0; i < arr2.length; i++) {
//         if (typeof arr1[i] === 'number') {
//             let arr3Element = arr1[i] + (arr2[i]);
//             arr3.push(arr3Element);
//         } else {
//             arr1[i] = 0;
//             let arr3Element = arr1[i] + (arr2[i]);
//             arr3.push(arr3Element);
//         }
//     }
// }
// console.log(arr3)


//
//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// function returnMinConsoleMax() {
//     let maxNum = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (maxNum < arguments[i]) {
//             maxNum = arguments[i]
//         }
//     }console.log(maxNum)
//     let minNum = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (minNum > arguments[i]){
//             minNum = arguments[i]
//         }
//     }return minNum
// }
//
// let rMCM = returnMinConsoleMax(-99999999, 4, 5, 6, -9, 4, 3, 323, 43, 999, -2, 10100, -1, -3, -4, -6, 100, -134)
// console.log(rMCM)

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function objToKeys(enterArrayOfObjects = []) {
//     let returnArr = [];
//     for (const enterArrayOfObject of enterArrayOfObjects) {
//         for (let enterArrayOfObjectsKey in enterArrayOfObject) {
//             returnArr.push(enterArrayOfObjectsKey)
//         }
//     }return returnArr
// }
//
// function returnValues(arrayOfObjects = []) {
//     let arrOfValuesArr = [];
//     let arrOfvalues = [];
//     let value;
//     for (const arrObjElement of arrayOfObjects) {
//         arrOfValuesArr.push(Object.values(arrObjElement))
//     }
//     for (const arrOfValue of arrOfValuesArr) {
//         for (let arrOfValueElement of arrOfValue) {
//             value = arrOfValueElement;
//             arrOfvalues.push(value)
//         }
//     }return arrOfvalues
// }
//
// function keysOrValues(array) {
//     let key_or_value = prompt('Масив ключів(key) чи масив значень(value)?')
//     if (key_or_value === 'key') {
//         return objToKeys(array)
//     } else if (key_or_value === 'value') {
//         return returnValues(array)
//     }
// }
//
// console.log(keysOrValues(arrObj))
// console.log(keysOrValues(arrObj))


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// ============================================================================================
//
//
//
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
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]








