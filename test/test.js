// // ) Знайти анаграму.Перевірити чи слово має в собі такі самі літери як і поеперднє слово.ANAGRAM | MGANRAA -> true; EXIT | AXET -> false; GOOD | DOGO -> true
// let word1 = 'EXIT'
// let word2 = 'IXET'
// for (let sym of word1) {
//     for (let sym2 of word2) {
//         if (sym === sym2) {
//             word1 = word1.replace(sym, '_')
//             word2 = word2.replace(sym2, '_')
//         }
//     }
// }
// if (word1 === word2) {
//     console.log('true')
// } else
//     console.log('false')
// // 2) Отримати масив лише унікальних значень за допомогою reduce[1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]
//
// let testArr2 = [1, 9, 0, 1, 5, 9, 1, 6]
// let sorted = testArr2.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     return -1
// })
// console.log(sorted)
// const newArr = sorted.reduce((acc, currentValue, currentIndex) => {
//     if (currentValue !== acc[currentIndex-2])
//         acc.push(currentValue)
//     return acc
// }, [])
// console.log(newArr)
// // 3) Дано відсортований масив (мінімум 10 елементів). Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
// // Example: [1, 1, 1, 2, 3, 3, 3, 3]
// // ->
// // [1, 1, 2, 3, 3, 1, 3, 3] [0, 0, 1, 1, 1, 2, 2]
// // ->
// // [0, 0, 1, 1, 2, 2, 1]
//
// let testArr3 = [0, 0, 1, 1, 1, 2, 2]
// let newArr3 = testArr3.reduce((acc, currentValue, currentIndex) => {
//
//     if (currentValue !== acc[currentIndex - 2])
//         acc.push(currentValue)
//     return acc
// }, [])
// console.log(newArr3)

// 3)
// var a1 = 'wrong'
//
// function a() {
//     this.a1 = 'right';
//     return '1st'
// };
//
// function a(val) {
//     return '2nd'
// }
//
// alert(new a().a1)

// console.log(typeof null)

// console.log({}.toString())

// function bar(){
//     return foo;
//     foo = 10;
//     function foo(){}
//     var foo = 11;
// }
// alert(typeof bar())

// console.log(4+3+2+'1')

// var str = new String();
// console.log(str.valueOf())


// function foo(a){
//     alert(arguments.length);
// }
// foo(1,2,3)

// var arr = []
// arr[0] = 'a'
// arr[1] = 'b'
// arr[10] = 'c'
// arr.foo = 'd'
// alert(arr.length)


// var result = 'ten' * 2;
// console.log(result===NaN)

// console.log(typeof NaN)

// console.log('hello')
//
// console.log(Math.round(7.25));


// let str = "Hello"; str.something = 5; alert(str.something);


// console.log(Boolean(10 > 9));


// f.call(f); function f() { alert( this ); }


// let x = 5; alert( x++ );

// console.log(parseInt("- 1.2"));

let courses = [
    {
        id: 1,
        title: 'first title course',
    },
    {
        id: 2,
        title: 'second title course',
    },
    {
        id: 3,
        title: 'third title course',
    }, {
        id: 4,
        title: 'fourth title course',
    }, {
        id: 5,
        title: 'fifth title course',
    }
];


const apps = [
  {id:1, name:'Jon'},
  {id:2, name:'Dave'},
  {id:3, name:'Joe'}
]

//remove item with id=2
const itemToBeRemoved = {id:2, name:'Dave'}

apps.splice(apps.findIndex(a => a.id === itemToBeRemoved.id) , 1)

//print result
console.log(apps)
