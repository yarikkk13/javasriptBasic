// ____________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ____________________________________________________________________________________________________________

// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// // Перевірку робити при натисканні на кнопку
// let uncensoredWords = ['one', 'two', 'three', 'four', 'five'];
// const inPut = document.getElementById('uncensored');
// const btn = document.getElementById('btn');
// btn.onclick = ev => {
//     const text = inPut.value;
//     for (let uncensoredWord of uncensoredWords) {
//         if (uncensoredWord === text){
//             alert('Но - но говорити нецензурщину')
//         }
//     }
// }

// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку
// let uncensoredWords = ['one', 'two', 'three', 'four', 'five'];
// const inPut = document.getElementById('uncensored');
// const btn = document.getElementById('btn');
// btn.onclick = ev => {
//     const text = inPut.value;
//     let arr = text.split(' ')
//     for (let uncensoredWord of uncensoredWords) {
//         for (let arrElement of arr) {
//             if (arrElement===uncensoredWord){
//                 alert('но но не заховаєш нецензурщину)')
//             }
//         }
//     }
// }

// // -- взять массив пользователей
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
const single = document.getElementById('isSingle');
const older29 = document.getElementById('olderThan29');
const cityKyiv = document.getElementById('cityKyiv');
const btn = document.getElementById('btn2');
btn.onclick = ev => {
    let filtered;
    if (single.checked === false && older29.checked === false && cityKyiv.checked === false) {
        filtered = usersWithAddress
    } else if (single.checked === true && older29.checked === false && cityKyiv.checked === false) {
        filtered = usersWithAddress.filter(value => {
            return value.isMarried === false
        })
    } else if (single.checked === false && older29.checked === true && cityKyiv.checked === false) {
        filtered = usersWithAddress.filter(value => {
            return value.age >= 29
        })
    } else if (single.checked === true && older29.checked === true && cityKyiv.checked === false) {
        filtered = usersWithAddress.filter(value => {
            return value.age >= 29 && value.isMarried === false
        })
    } else if (single.checked === false && older29.checked === false && cityKyiv.checked === true) {
        filtered = usersWithAddress.filter(value => {
            return value.address.city === 'Kyiv'
        })
    } else if (single.checked === true && older29.checked === false && cityKyiv.checked === true) {
        filtered = usersWithAddress.filter(value => {
            return value.address.city === 'Kyiv' && value.isMarried === false
        })
    } else if (single.checked === true && older29.checked === true && cityKyiv.checked === true) {
        filtered = usersWithAddress.filter(value => {
            return value.address.city === 'Kyiv' && value.isMarried === false && value.age >= 29
        })
    }
    document.write(JSON.stringify(filtered))
}
//
// // let filterStatus = usersWithAddress.filter(value => {
// //     return value.isMarried === false
// // })
// // let filterAge = usersWithAddress.filter(value => {
// //     return value.age >= 29
// // })
// // let filterCity = usersWithAddress.filter(value => {
// //     return value.address.city === 'Kyiv'
// // })
// // console.log(filterStatus)
// // console.log(filterAge)
// // console.log(filterCity)
// // console.log(usersWithAddress)
//
//
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как
// // вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ