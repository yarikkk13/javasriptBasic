// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content)

//     b) отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules)

//     c) замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = 'hello world';

//     d) замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerHTML = 'lorem';

//     e) змініть кожному елементу колір фону на червоний
// content.style.backgroundColor = 'red';
// rules.style.backgroundColor = 'tomato';

//     f) змініть кожному елементу колір тексту на синій
// content.style.color = 'blue';
// rules.style.color = 'blue';

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rules.classList);

//     h) отримати всі елементи з класом fc_rules
// let classFCrRules = document.getElementsByClassName('fc_rules');
// console.log(classFCrRules);

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let classFCrRule of classFCrRules) {
//     classFCrRule.style.color = 'tomato';
// }


//
//
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// for (let user of users) {
//     const userDiv = document.createElement('div');
//     userDiv.style.backgroundColor = 'tomato';
//     userDiv.style.border = 'solid 1px'
//     userDiv.innerHTML = `${user.name}, ${user.age}, ${user.status}, ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`
//     document.body.appendChild(userDiv)
//     console.log(userDiv)
// }


// for (let i = 0; i < users.length; i++) {
//     let userDiv = document.createElement('div');
//     userDiv.style.backgroundColor = 'tomato';
//     userDiv.style.border = 'solid 1px';
//     userDiv.innerHTML = `Мене звати: ${users[i].name}`;
//     document.body.appendChild(userDiv)
// }console.log(users)

// let conteiner = document.getElementById('conteiner')
for (const user of users) {
    let userDiv = document.createElement('div')
    userDiv.style.border = 'solid 1px'
    // userDiv.classList.add('user')
    document.body.appendChild(userDiv)
    for (const field in user) {
        if (field !== 'address') {
            let userDivElement = document.createElement('div')
            userDivElement.style.color = 'tomato'
            userDivElement.innerText = `${user[field]}`;
            userDiv.appendChild(userDivElement)
        }
    }
    for (const field in user.address) {
        let address = document.createElement('span')
        address.style.backgroundColor = 'tomato'
        address.classList.add('address')
        address.innerText = `${user.address[field]+ ' '}`;
        userDiv.appendChild(address)
    }
}