// let a = 'hello world';
// console.log(a);
//  Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let a = 'hello';
// let company = 'owu';
// let word = 'com';
// let country = 'ua';
// let number = 1;
// let ten = 10;
// let negNumber = -999;
// let sequence = 123;
// let pi = 3.14;
// let x = 2.7;
// let y = 16;
// let Yarik = true;
// let Igor = false;
//  // Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(a);
// console.log(company);
// console.log(word);
// console.log(country);
// console.log(number);
// console.log(ten);
// console.log(negNumber);
// console.log(sequence);
// console.log(pi);
// console.log(x);
// console.log(y);
// console.log(Yarik);
// console.log(Igor);
// alert(a);
// alert(company);
// alert(word);
// alert(country);
// alert(number);
// alert(ten);
// alert(negNumber);
// alert(sequence);
// alert(pi);
// alert(x);
// alert(y);
// alert(Yarik);
// alert(Igor);
// document.write(a);
// document.write(company);
// document.write(word);
// document.write(country);
// document.write(number);
// document.write(ten);
// document.write(negNumber);
// document.write(sequence);
// document.write(pi);
// document.write(x);
// document.write(y);
// document.write(Yarik);
// document.write(Igor);
// // Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// a = 'bye';
// company = 'wiki';
// word = 'random';
// country = 'us';
// number = 10;
// ten = 100;
// negNumber = -99;
// sequence = 1234;
// pi = 3.1415;
// x = 2.75;
// y = 4;
// Yarik = false;
// Igor = true;
// // Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(a);
// console.log(company);
// console.log(word);
// console.log(country);
// console.log(number);
// console.log(ten);
// console.log(negNumber);
// console.log(sequence);
// console.log(pi);
// console.log(x);
// console.log(y);
// console.log(Yarik);
// console.log(Igor);
// alert(a);
// alert(company);
// alert(word);
// alert(country);
// alert(number);
// alert(ten);
// alert(negNumber);
// alert(sequence);
// alert(pi);
// alert(x);
// alert(y);
// alert(Yarik);
// alert(Igor);
// document.write(a);
// document.write(company);
// document.write(word);
// document.write(country);
// document.write(number);
// document.write(ten);
// document.write(negNumber);
// document.write(sequence);
// document.write(pi);
// document.write(x);
// document.write(y);
// document.write(Yarik);
// document.write(Igor);
// // За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt('Яке твоє імя?');
// let secondName = prompt('Як тебе по батькові?');
// let age = prompt('скільки тобі років?');
// // Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// console.log('Вітаю'+ ' '+ name + ' ' + secondName + '. ' + 'Тобі ' + age + ' років.');
// // Взяти змінні з завдання вище та з'єднати їх в одну змінну (конкатинація).
// let obyednanaZminna = name + secondName + age; // я правильно зрозумів умову задачі?
// // За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let num1 = +prompt('перше число?')
// let num2 = +prompt('друге число?')
// let num3 = +prompt('третє число?')
// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(typeof num2)
// // За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number1 = parseInt(prompt('перше число?'));
// let number2 = parseInt(prompt('друге число?'));
// let number3 = parseInt(prompt('третє число?'));
// let number4 = parseInt(prompt('четверте число?'));
// let sum = number1 + number2 + number3 + number4;
// console.log(sum);
// // За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// let num1 = parseFloat(prompt('Перше число?'));
// let num2 = parseFloat(prompt('Друге число?'));
// let num3 = parseFloat(prompt('Третє число?'));
// // Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let result = num1 + num2 + num3;
// console.log(result);
// // За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let num1 = Math.round(prompt('1 число?'));
// let num2 = Math.round(prompt('2 число?'));
// let num3 = Math.round(prompt('3 число?'));
// let sum = num1 + num2 + num3;
// console.log(sum);
// // За допомогою prompt() отримати 2 цілих числа.
// //   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// //   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// //   Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let n1 = Math.round(prompt('Введіть основу степеня:'));
// let n2 = Math.round(prompt('Введіть показник степеня:'));
// let paw = Math.pow(n1,n2);
// console.log(paw);
// // За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
console.log(5<6);
console.log(5>6);
console.log(5===6);
console.log(5>=6);
console.log(10>=10);
console.log(10<=10);
console.log(10>10);
console.log(10<10);
console.log(10!==10);
console.log(123==='123');
console.log(123=='123'); // не зрозумів що це таке Comparison 123=='123' may cause unexpected type coercion


