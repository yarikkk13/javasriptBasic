// console.log('he')
//
// const foo = () => {
//     return
// }
//
// console.log(foo());


let arr = [{age: 10}, {age: 20}, {age: 5}];
let user = arr.find(item => item.age === 5);

console.log(arr)
console.log(user)

// const sorted = (arr) => {
//     return arr.sort((a, b) => a.age - b.age)
// }
//
// console.log(sorted(arr));
//
//
// function disemvowel(str) {
//     let newStr = "",
//         i;
//
//     for (i = 0; i < str.length; i++) {
//         if ("aeiou".includes(str[i].toLowerCase())) continue;
//         newStr += str[i];
//     }
//     return newStr;
// }
//
// console.log(disemvowel("This website is for losers LOL!"));