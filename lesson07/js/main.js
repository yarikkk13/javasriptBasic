let li = document.body.getElementsByTagName('li');
let max = (li.length - 1) * 150;
let temp = 0;

let nextb = document.body.getElementsByClassName('next')[0];
let prevb = document.body.getElementsByClassName('prev')[0];

nextb.onclick = function () {
    if (temp < max) {
        temp += 150;
        li[0].style.marginLeft = -temp + 'px';
    }
};
prevb.onclick = function () {
    if (temp > 0) {
        temp -= 150;
        li[0].style.marginLeft = -temp + 'px';
    }
};