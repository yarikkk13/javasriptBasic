// // - Дана textarea. В неё вводится текст.Сделайте так, чтобы после захода на эту страницу
// //   через некоторое время, введенный текст остался в textarea.
let textarea = document.querySelector('textarea')
console.log(textarea)
textarea.oninput = (() => {
        localStorage.value = textarea.value
    }
)
textarea.value = localStorage.value

textarea.oninput = (() => {
    localStorage.setItem('key', `${textarea.value}`)
})
textarea.value = localStorage.getItem('key')

// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// //   Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// //   Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на
// //   своих местах.Сделайте ваш скрипт как можно более универсальным.

let myForm = document.getElementById('formInfo')
console.log(myForm)
for (let element of myForm) {
    // console.log(tag)
    if (element.type === 'radio') {
        console.log(element)
        let value = localStorage.getItem(element.name)
        console.log(element.id, value)
        if (element.id === value) {
            element.checked = true
        }
    } else if (element.type === 'checkbox') {
        let bool = localStorage.getItem(element.name)
        element.checked = bool !== 'false'
    } else {
        element.value = localStorage.getItem(element.name)
    }
}

myForm.oninput = ({target: {type, name, value, checked, id}}) => {
    if (type === 'radio') {
        localStorage.setItem(name, id)//id
    } else if (type === 'checkbox') {
        localStorage.setItem(name, checked)
    } else {
        localStorage.setItem(name, value)
    }
}


// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// //  затем поредактировать их, затем еще поредактировать и возможно еще... Требование : хранить историю
// //  своих изменений (даже после перезагрузки страницы). Сверху над текстареа должны появится стрелочки,
// //  с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let myText = document.getElementById('thirdTextArea')
let save = document.getElementById('save')
let forward = document.getElementById('forward')
let back = document.getElementById('back')
let i = 0
console.log(save)
console.log(myText)

if (!localStorage.getItem(myText.id)) {
    localStorage.setItem(myText.id, JSON.stringify([]))
}
save.onclick = () => {
    let text = myText.value
    let arrOfText = JSON.parse(localStorage.getItem(myText.id))
    arrOfText.push(text)
    console.log(arrOfText)
    localStorage.setItem(myText.id, JSON.stringify(arrOfText))
}
back.onclick = () => {
    let arrOfText = JSON.parse(localStorage.getItem(myText.id))
    if (i - 1 >= 0) {
        i--
    } else {
        i = arrOfText.length - 1
    }
    myText.value = arrOfText[i]
}
forward.onclick = () => {
    let arrOfText = JSON.parse(localStorage.getItem(myText.id))
    if (i + 1 < arrOfText.length) {
        i++
    } else {
        i = 0
    }
    myText.value = arrOfText[i]
}


// // - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// //   Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// //   Данные вводить через соответсвующую форму.
// // --Каждому контакту добавить кнопку для удаления контакта.
// // --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть
// //   все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
let mySave = document.getElementById('saveIt')
let myEls = document.getElementById('fourthTaskForm')
let myBack = document.getElementById('back4')
let myForward = document.getElementById('forward4')
let myCards = 'myCards'

if (!localStorage.getItem(myCards)) {
    localStorage.setItem(myCards, JSON.stringify([]))
}

let inputData = (obj, target) => {
    console.log(target)
    for (let targetElement of target) {
        targetElement.value = obj[targetElement.name]
    }
}


// myEls.oninput = ({target: {name, value}}) => {
//     localStorage.setItem(name, value)
// }

mySave.onclick = () => {
    let obj = {};
    for (let myEl of myEls) {
        obj[myEl.name] = myEl.value
    }
    let array = JSON.parse(localStorage.getItem(myCards))
    array.push(obj)
    localStorage.setItem(myCards, JSON.stringify(array))
    i++
}

myBack.onclick = () => {
    let array = JSON.parse(localStorage.getItem(myCards))
    if (i - 1 >= 0) {
        i--
    } else {
        i = array.length - 1
    }
    let obj = array[i];
    inputData(obj, myEls)
}

myForward.onclick = () => {
    let array = JSON.parse(localStorage.getItem(myCards))
    if (i + 1 < array.length) {
        i++
    } else {
        i = 0
    }
    let obj = array[i]
    inputData(obj, myEls)
}