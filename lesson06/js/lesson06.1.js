// // 1) Створити масив з 20 чисел та:
// let numArr = [12, 53, 45, 32, 64, 0, -12, 54, 65, 94, 29, 43, 17, 75, 22, 59, 42, -4, 24, 84];

// //  a) відсортувати його від меншого до більшого.
// let sortAb = numArr.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     return -1
// })
// console.log(sortAb)

// //  b) відсортувати його від більшого до меншого.
// let sortBa = numArr.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//     return -1
// })
// console.log(sortBa)

// //  c) Відфілтрувати числа які є кратними 3.
// let filter3 = numArr.filter(value => {
//     return value%3===0
// })
// console.log(filter3)

// //  d) Відфілтрувати числа які є більшими за 10.
// let filterMore10 = numArr.filter(value => {
//     return value>10
// })
// console.log(filterMore10)

// //  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let iterPlusWrite = numArr.forEach((value) =>
//     document.write(`${value} <br/>`)
// )
// console.log(iterPlusWrite)//получилось, але чогось IDEшка матюкається, не знаю як зафіксити

// //  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let mapX3 = numArr.map(value => {
//     return value*3
// })
// console.log(mapX3)

// //  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let sumByReduce = numArr.reduce((acc, currentValue) => {
//     console.log(acc);
//     console.log(currentValue);
//     console.log('_______')
//     return currentValue+acc
// },0)
// console.log(sumByReduce)


// // 2) Створити масив з 20 стрічок та:
// let strArr = ['andrew', 'borys', 'clarke', 'den', 'emily', 'fedir', 'gregory', 'house', 'inet',
//     'jason', 'xander', 'robert', 'python', 'c#', 'darina', 'html', 'strength', 'js', 'java', 'something']
// console.log(strArr)

// //  a) Відсортувати його в алфавітному порядку
// let sortArrAb = strArr.sort()
// console.log(sortArrAb)

// //  b) Відсортувати в зворотньому порядку
// let sortArrBa = strArr.sort((a, b) => {
//     if(a<b){
//         return 1
//     }
//     return -1
// })
// console.log(sortArrBa)

// //  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let moreThan4 = strArr.filter(value => {
//     return value.length>4
// })
// console.log(moreThan4)

// //  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let change = strArr.map(value => {
//     return 'Sam says ' + value
// })
// console.log(change)
// console.log(strArr)

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let byAgeUp = users.sort((a, b) => {
//     if (a.age>b.age){
//         return 1
//     }return -1
// })
// console.log(byAgeUp)
//
// let byAgeDown = users.sort((a, b) => {
//     if (a.age<b.age){
//         return 1
//     }return -1
// })
// console.log(byAgeDown)

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let byQuantityUp = users.sort((a, b) => {
//     if (a.name.length > b.name.length) {
//         return 1
//     }return -1
// })
// console.log(byQuantityUp);
// let byQuantityDown = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return 1
//     }return -1
// })
// console.log(byQuantityDown);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив
// залишиться без змін)
// let newArr = [];
// users.forEach((value, index) => {
//     value.id = index + 1;
//     newArr.push(value)
// });
//
// let newArr = users.reduce((acc, currentValue, currentIndex) => {
//     currentValue.id = currentIndex + 1
//     acc.push(currentValue)
//     return acc
// },[])
// console.log(newArr)
// console.log(users)
//
//
// let map = users.map((value, index) => {
//     return value.id = index + 1
// })
// console.log(map)
// console.log(users)

// d) відсортувати його за індентифікатором
//
// let newSort = newArr.sort((a, b) => {
//     if(a.id<b.id){
//         return 1
//     }return -1
// })
// console.log(newSort)


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let getFlat = users.reduce((acc, value) => {
//     if (value.isMarried === true) {
//         value.flat = true;
//         acc.push(value)
//     }
//     return acc
// },[])
// console.log(getFlat);
// console.log(users)