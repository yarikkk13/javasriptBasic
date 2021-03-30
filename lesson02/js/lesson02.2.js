// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arrStr = ['a', 'b', 'c'];
// for (let n=1; n <= 3; n++) {
//     arrStr.push(n);
// }
// console.log(arrStr)

// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrNum = [1, 2, 3];
// arrNum =[];
// for (let n=3; n >= 1; n--) {
//     arrNum.push(n);
// }
// console.log(arrNum)

// let arrNum = [1, 2, 3];
// for (let n=3; n >= 1; n--) {
//     arrNum.shift();
//     arrNum.push(n);
// }
// console.log(arrNum)

// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arrNum = [1, 2, 3];
// for (let n=4; n <= 6; n++) {
//     arrNum.push(n);
// }
// console.log(arrNum)

// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arrNum = [1, 2, 3];
// for (let n=6; n >= 4; n--) {
//     arrNum.unshift(n);
// }
// console.log(arrNum)

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arrStr = ['js', 'css', 'jq'];
// let str = arrStr.shift()
// console.log(str)

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arrStr = ['js', 'css', 'jq'];
// let str = arrStr.pop()
// console.log(str)

// // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arrNum = [1, 2, 3, 4, 5];
// for (let i = 0; i < 3; i++) {
//     arrNum.shift();
// }console.log(arrNum);

// // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arrNum = [1, 2, 3, 4, 5];
// for (let i = 0; i < 3; i++) {
//     arrNum.pop();
// }console.log(arrNum);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let arrNum = [1, 2, 3, 4, 5];
// let n1 = arrNum.pop();
// let n2 = arrNum.pop();
// arrNum.push('a');
// arrNum.push('b');
// arrNum.push('c');
// arrNum.push(n2);
// arrNum.push(n1);
// console.log(arrNum);

// // - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// //     Підказка. Працюйте по принципу задачі вище.
// let arrNum = [1, 2, 3, 4, 5];
// let n5 = arrNum.pop();
// let n4 = arrNum.pop();
// let n3 = arrNum.pop();
// let n2 = arrNum.pop();
// arrNum.push('a');
// arrNum.push('b');
// arrNum.push(n2);
// arrNum.push(n3);
// arrNum.push(n4);
// arrNum.push('c');
// arrNum.push(n5);
// arrNum.push('e');
// console.log(arrNum);

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i]%2){continue}
//     console.log(arrNum[i])
// }

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
// // скопіювати значення одного масиву в інший
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let arrNum2 = [];
// for (let i = 0; i < arrNum.length; i++) {
//     arrNum2.push(arrNum[i])
// }console.log(arrNum2)

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// // значення одного масиву в інший.
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let arrNum2 = [];
// for (let i = arrNum.length-1; i >= 0; i--) {
//     arrNum2.unshift(arrNum[i]);
// }console.log(arrNum2);

// ============

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// // 1. перебрати його циклом while
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrNum.length){
//     console.log(arrNum[i]);
//     i++
// }

// // 2. перебрати його циклом for
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrNum.length){
//     if(arrNum[i]%2!==0)
//     console.log(arrNum[i]);
//     i++
// }

// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrNum.length){
//     if(arrNum[i]%2===1)
//     console.log(arrNum[i]);
//     i++
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNum.length; i++) {
//     if(arrNum[i]%2!==0)
//     console.log(arrNum[i]);
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrNum.length){
//     if(arrNum[i]%2===0)
//     console.log(arrNum[i]);
//     i++
// }

// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrNum.length){
//     if(arrNum[i]%2!==1)
//     console.log(arrNum[i]);
//     i++
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNum.length; i++) {
//     if(arrNum[i]%2){continue}
//     console.log(arrNum[i]);
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNum.length; i++) {
//     if(arrNum[i]%3===0)
//         arrNum[i]='okten';
// }
// console.log(arrNum)

// // 8. вивести масив в зворотньому порядку.
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrNum.length-1; i >= 0; i--) {
// console.log(arrNum[i])
// }
// console.log(arrNum)

// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// // 1. перебрати його циклом while
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=arrNum.length-1;
// while (i>=0){
//     console.log(arrNum[i]);
//     i--
// }

// // 2. перебрати його циклом for
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrNum.length-1; i >= 0; i--) {
//     console.log(arrNum[i]);
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=arrNum.length-1;
// while (i>= 0){
//     if(arrNum[i]%2!==0)
//     console.log(arrNum[i]);
//     i--
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrNum.length-1; i >= 0; i--) {
//     if(arrNum[i]%2!==0)
//     console.log(arrNum[i]);
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let i=arrNum.length-1;
// while (i >= 0){
//     if(arrNum[i]%2===0)
//     console.log(arrNum[i]);
//     i--;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrNum.length-1; i >= 0; i--) {
//     if(arrNum[i]%2){continue}
//     console.log(arrNum[i]);
// }

// // 7. замінити кожне число кратне 3 на слово "okten"
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrNum.length-1; i >= 0; i--) {
//     if(arrNum[i]%3===0)
//         arrNum[i]='okten';
//     console.log(arrNum[i]);
// }
// console.log(arrNum)

// // 10
// //  створити пустий масив та :
// // - заповнити його 50 парними числами за допомоги циклу.
// let arrNum = [];
// for (let i = 1; i <= 100; i++) {
//     if (i%2===0){arrNum.push(i)}
// }console.log(arrNum)

// // - заповнити його 50 непарними числами за допомоги циклу.
// let arrNum = [];
// for (let i = 1; i <= 100; i++) {
//     if (i%2!==0){arrNum.push(i)}
// }console.log(arrNum)

// 1. Створити пустий масив та :
// //        a. заповнити його 50 парними числами за допомоги циклу.
// let arrNum = [];
// for (let i = 1; i <= 100; i++) {
//     if (i%2===0){arrNum.push(i)}
// }console.log(arrNum)

// //        b. заповнити його 50 непарними числами за допомоги циклу.
// let arrNum = [];
// for (let i = 1; i <= 100; i++) {
//     if (i%2!==0){arrNum.push(i)}
// }console.log(arrNum)

// //        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arrNum = [];
// let n;
// for (let i = 0; i < 20; i++) {
//     n=Math.floor(Math.random() * Math.floor(30))
//     arrNum[i]=n;
// }console.log(arrNum)

// //        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arrNum = [];
// let n;
// for (let i = 0; i < 20; i++) {
//     n = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     arrNum[i]=n;
// }console.log(arrNum)


// min = Math.ceil(8);
// max = Math.floor(732);
// let n = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(n)

// //  2. Вивести за допомогою console.log кожен третій елемен
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 2; i < arrNum.length; i=i+3) {
//     console.log(arrNum[i])
// } //зробив в трохи ручному режимі, бо не зміг придумати як перший 'третій елемент' вивести

// //  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 2; i < arrNum.length; i=i+3) {
//     if(arrNum[i]%2===0)
//     console.log(arrNum[i])
// }

// //  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий
// //  масив
// let arrNum = [2,17,13,6,22,31,45,66,100,-18];
// let arrNew = [];
// for (let i = 2; i < arrNum.length; i=i+3) {
//     if(arrNum[i]%2===0)
//         arrNew.push(arrNum[i])
// }console.log(arrNew)

// //  5. Вивести кожен елемент масиву, сусід справа якого є парним
// //   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arrNum = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arrNum.length; i++) {
//     if(arrNum[i]%2===0){
//         console.log(arrNum[i-1])
//     }
// }

// //  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній
// //  чек.
// let arrNum = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i=0; i < arrNum.length; i++){
//     sum = sum + arrNum[i];
// }console.log(sum/arrNum.length);

// //  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrNum = [];
// let arrNew = [];
// let n;
// for (let i = 0; i < 20; i++) {
//     n=Math.floor(Math.random() * Math.floor(30))
//     arrNum[i]=n;
//     arrNew.push(5*arrNum[i]);
// }console.log(arrNum);
// console.log(arrNew);

// //  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// //  додати його в інший масив.
// let arrMix = [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'];
// let arrNumNew = [];
// for (let i = 0; i < arrMix.length; i++) {
//     if (typeof arrMix[i]==='number'){
//         arrNumNew.push(arrMix[i]);
//     }
// }console.log(arrNumNew);

//                                                                    Додатково
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.