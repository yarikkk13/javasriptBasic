// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Word', [9,6,1], ['oops'], 9] -> [1, 3, 'Hello, 'Word', 9, 6, 1, 'oops', 9]

// let mixedArr = [1, 3, ['Hello', 'Word', [9, 6, 1]], ['oops'], 9];

// function flattering(multiLevelArray = []){
//     let normArray = [];
// let n;
// for (let i = 0; i < multiLevelArray.length; i++) {
//     n = multiLevelArray[i];
//     if (typeof n === 'number' || typeof n === 'string') {
//         normArray.push(n)
//     } else {
//         for (let nElement of n) {
//             if (typeof nElement === 'number' || typeof nElement=== 'string') {
//                 normArray.push(nElement)
//             }else {
//                 for (let nElementElement of nElement) {
//                     normArray.push(nElementElement)
//                 }
//             }
//         }
//     }
// }
// return normArray
// }
// console.log(flattering(mixedArr))


// function straightener(multiLevelArray = []){
//     let normArray = [];
// let n;
// for (let i = 0; i < multiLevelArray.length; i++) {
//     n = multiLevelArray[i];
//     if (typeof n !== 'object') {
//         normArray.push(n)
//     } else {
//         for (let nElement of n) {
//             if (typeof nElement !== 'object') {
//                 normArray.push(nElement)
//             }else {
//                 for (let nElementElement of nElement) {
//                     normArray.push(nElementElement)
//                 }
//             }
//         }
//     }
// }
// return normArray
// }
// console.log(straightener(mixedArr))


// let multiLevelArray = [1, 3, ['Hello', 'Word', [9, 6, 1]], ['oops'], 9];
// let normArray = [];
// let n;
// for (let i = 0; i < multiLevelArray.length; i++) {
//     n = multiLevelArray[i];
//     if (typeof n === 'number' || typeof n === 'string') {
//         normArray.push(n)
//     } else {
//         for (let nElement of n) {
//             if (typeof nElement === 'number' || typeof nElement=== 'string') {
//                 normArray.push(nElement)
//             }else {
//                 for (let nElementElement of nElement) {
//                     normArray.push(nElementElement)
//                 }
//             }
//         }
//     }
// }
// multiLevelArray = normArray;
// console.log(multiLevelArray)