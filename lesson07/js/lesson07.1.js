// // - Создать произвольный елемент с id = text. Используя JavaScript, сделайте так,
// //   чтобы при клике на кнопку исчезал элемент с id="text".
// let el = document.getElementById('text');
// let bttn = document.getElementById('form')
// bttn.onclick = (ev) => {
//     ev.preventDefault()
//     // console.log('hello')
//     // el.removeAttribute('id')
//     // el.remove()
//     el.style.display='none'
//
// }

// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let bttn = document.getElementById('form')
// bttn.onclick = (ev) => {
//     ev.preventDefault()
//     bttn.style.display ='none'
//     // bttn.remove()
// }

// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити
// //   про це користувача
//
// let arr = document.querySelector('form')
// let [inPut , bttn] = arr;
// // console.log(arr)
// // console.log(inPut)
// // console.log(bttn)
// // inPut.oninput = () => {
// //     console.log(inPut.value)
// // }
//
// bttn.onclick = (ev) =>{
//     // ev.preventDefault();
//     // if (inPut.value>=18){
//     //     alert('Welcome')
//     // }else {alert('Тобі менше 18')}
//     alert(`You are ${inPut.value} years old!`)
//
// }

// // - Создайте меню, которое раскрывается/сворачивается при клике
// let list = document.getElementById('list');
// const btn = document.getElementById('btn');
// let flag = true;
// btn.onclick =(ev) =>{
//     list.style.display = flag ? 'none': 'block';
//     flag=!flag
// }

// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //   Вывести список комментариев в документ, каждый в своем блоке.
// //   Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// const comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'consectur', body: 'consectetur adipisicing elit'},
//     {title: 'apernatur', body: 'Aspernatur consectetur facere ipsa'},
//     {title: 'magni', body: 'magni nam quam repellat voluptates.'},
//     {title: 'accusamos', body: 'Accusamus assumenda, dicta explicabo'},
//     {title: 'fugit', body: 'fugit hic magni nostrum optio'},
//     {title: 'reiceindis', body: 'reiciendis sit temporibus velit'}
// ];
// const putCom = document.getElementById('putCommentsOrTable');
// comments.forEach(item => {
//     const header = document.createElement('h1');
//     const body = document.createElement('p');
//     const div = document.createElement('div');
//     const btn = document.createElement('button');
//
//     btn.innerText = 'hide/show comment';
//     btn.onclick = () => {
//         body.hidden = !body.hidden
//     };
//     body.innerHTML = item.body;
//     header.innerHTML = item.title;
//     div.appendChild(header);
//     div.appendChild(body);
//     div.appendChild(btn);
//     putCom.appendChild(div)
// })

// // - Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// //   інформація з цих 2х форм.
// //   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// //   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn2 = document.getElementById('btn2');
// btn2.onclick = ev => {
//     const myForms = document.myForm2
//     for (let myForm of myForms) {
//         for (let myFormElement of myForm) {
//             console.log(myFormElement.value)
//         }
//     }
// }

// // - Створити функцію, яка генерує таблицю.
// //   Перший аргумент визначає кількість строк.
// //   Другий параметр визначає кліькіть ячеєк в кожній строці.
// //   Третій параметр визначає елемент в який потрібно таблицю додати.
//
// const tableMaker = (str, columns, targetTagId) => {
//     const target = document.getElementById(targetTagId);
//     const table = document.createElement('table');
//     for (let i = 0; i < str; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             td.innerText = `${i} : ${j}`;
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     target.appendChild(table)
// }
// tableMaker(5, 5, 'putCommentsOrTable')

// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let images = [
//     {
//         src: 'https://upload.wikimedia.org/wikipedia/uk/0/0c/The_Fellowship_Of_The_Ring.jpg',
//         alt: 'lotr1'
//     }, {
//         src: 'https://upload.wikimedia.org/wikipedia/uk/thumb/9/9f/The_Two_Towers.jpg/338px-The_Two_Towers.jpg',
//         alt: 'lotr2'
//     }, {
//         src: 'https://upload.wikimedia.org/wikipedia/uk/thumb/a/a3/The_Return_of_the_King.jpg/338px-The_Return_of_the_King.jpg',
//         alt: 'lotr3'
//     }];
// const butLeft = document.getElementById('btnLeft');
// const butRight = document.getElementById('btnRight');
// const imgContainer = document.getElementById('container');
// let currentI = 1;
//
// butLeft.onclick = () => {
//     if (currentI - 1 < 0) {
//         currentI = images.length - 1;
//     } else {
//         currentI = currentI - 1
//     }
//     imgContainer.src = images[currentI].src;
//     imgContainer.alt = images[currentI].alt;
// }
// butRight.onclick = () => {
//     if (currentI + 1 > images.length-1) {
//         currentI = 0;
//     } else {
//         currentI = currentI + 1
//     }
//     imgContainer.src = images[currentI].src;
//     imgContainer.alt = images[currentI].alt;
// }
