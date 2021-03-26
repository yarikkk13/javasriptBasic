// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let numbArr = [12, 23, 1, 54, 95];
// let wordArr = ['Roman', 'Andrij', 'Karina', 'Taras', 'Olha'];
// let mixedArr = [17, '56', true, 'country', 0];
// console.log(numbArr);
// console.log(wordArr);
// console.log(mixedArr);

// // Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr = [];
// emptyArr[1] = 'name';
// emptyArr[5] = true;
// emptyArr[10] = 'light';
// emptyArr[19] = '14';
// emptyArr[91] = 63;
// console.log(emptyArr);

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <= 9; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>')
// }

// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 9; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet '+i+'</div>')
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=1;
// while (i<=20){
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// }

// // // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=1;
// while (i<=20){
//     document.write(`<h1>Lorem ipsum dolor: ${i}</h1>`);
//     i++;
// }

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrNumb = [12, 3, 32, 76, 45, 83, 23, 94, 43, 18];
// for (let i=0; i<10; i++){
//     console.log(arrNumb[i])
// }

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrStr = ['Roman', 'Andrij', 'Karina', 'Taras', 'Olha', 'window', 'table', 'chair', 'plate', 'hand'];
// for (let i=0; i<10; i++){
//     console.log(arrStr[i])
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrMix = [17, '56', true, 'country', 0, 23, false, null, 'name', 43];
// for (let i=0; i<=9; i++){
//     console.log(arrMix[i])
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrMix = [17, '56', true, 'country', 0, 23, false, '23', 'name', 43];
// for (let i=0; i<=9; i++){
//     if (typeof arrMix[i]==="boolean")
//     console.log(arrMix[i])
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrMix = [17, '56', true, 'country', 0, 23, false, '23', 'name', 43];
// for (let i=0; i<=9; i++){
//     if (typeof arrMix[i]==="number")
//     console.log(arrMix[i])
// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrMix = [17, '56', true, 'country', 0, 23, false, '23', 'name', 43];
// for (let i=0; i<=9; i++){
//     if (typeof arrMix[i]==="string")
//     console.log(arrMix[i])
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrMix = [];
// arrMix[0]='name';
// arrMix[10]='23';
// arrMix[22]='age';
// arrMix[31]=13;
// arrMix[23]=false;
// arrMix[17]='table';
// arrMix[5]=25;
// arrMix[11]='0';
// arrMix[43]=14;
// arrMix[34]=true;
// for (let i=0; i<arrMix.length;i++){
//     // if (typeof arrMix[i]!=="undefined")
//         console.log(arrMix[i]);
// }

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<10; i++){
//     console.log(i);
//     document.write(i + '<br/>');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=1; i<=100; i++){
//     console.log(i);
//     document.write(i + '<br/>');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<200; i=i+2){
//     console.log(i);
//     document.write(i + '<br/>');
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=1; i<=100; i++){
//     if (i%2){continue}
//     console.log(i);
//     document.write(i + '<br/>');
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=1; i<=100; i++){
//     if (i%2 !== 0)continue
//     console.log(i);
//     document.write(i + '<br/>');
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=1; i<=100; i++){
//     if (i%2 === 0) {
//     console.log(i);
//     document.write(i + '<br/>');
// }}

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=1; i<=100; i++){
//     if (i%2 !== 0){
//     console.log(i);
//     document.write(i + '<br/>');
// }}

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=1; i<=100; i++){
//     if (i%2 === 1){
//     console.log(i);
//     document.write(i + '<br/>');
// }}

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let min=1; min<=2; min++){
//     for (let sec=0; sec<=59;sec++){
//         console.log('sec :',sec)
//     }
//     console.log('min :', min);
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let hours=0; hours<3;hours++){
    for (let min=0; min<60; min++){
        for (let sec=0;sec<60;sec++){
            console.log(`${hours}:${min}:${sec}`);
            if (hours===2&& min===20&& sec===30){
                min=60
                break
            }
        }
    }
}//як заставити ще порахувати 20 хвилин вообше не можу зрозуміти