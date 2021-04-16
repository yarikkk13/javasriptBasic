// // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// // заголовкам которые есть в тексте. При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
let zaholovks = document.querySelectorAll(' h2')
console.log(zaholovks)
const olka = document.createElement('ol')
const forRules = document.getElementById('forRules')
for (let zaholovk of zaholovks) {
    let lizhko = document.createElement('li')
    lizhko.innerText = zaholovk.innerHTML
    olka.appendChild(lizhko)
}
forRules.appendChild(olka)

console.log(olka)
let listOfli = document.querySelectorAll('li')
console.log(listOfli)
console.log(listOfli[0].innerText);
console.log(zaholovks[0].innerText)
listOfli[0].onclick = (ev => {
    zaholovks[0].style.display = 'none'
})