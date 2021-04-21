console.log('hello world')

// // 1.CALLBACK HELL
//
// function wakeUp(wokeUp, cb) {
//     setTimeout(() => {
//         if (wokeUp) {
//             cb(null, 8);
//         } else {
//             cb('u are late')
//         }
//     }, 8000)
// }
//
// function brushTeeth(time, cb) {
//     setTimeout(() => {
//         if (time === 8) {
//             cb(null, 8.15);
//         } else {
//             cb('ur teeth are not brushed')
//         }
//     }, 500)
// }
//
// function eating(time, cb) {
//     setTimeout(() => {
//         if (time === 8.15) {
//             cb(null, 8.35);
//         } else {
//             cb('u are hungry')
//         }
//     }, 700)
// }
//
// function driving(time, cb) {
//     setTimeout(() => {
//         if (time === 8.35) {
//             cb(null, 9.00);
//         } else {
//             cb('u are late on job')
//         }
//     }, 750)
// }
//
// function jobIsDone(time, cb) {
//     setTimeout(() => {
//         if (time === 9) {
//             cb(null, 300);
//         } else {
//             cb('u re job is not done')
//         }
//     }, 6000)
// }
//
// function shopping(money, cb) {
//     setTimeout(() => {
//         if (money >= 300) {
//             cb(null, money - 30);
//         } else {
//             cb('not enough money')
//         }
//     }, 300)
// }
//
// function driveHome(money, cb) {
//     setTimeout(() => {
//         if (money > 50) {
//             cb(null, 19.00);
//         } else {
//             cb('u cant get home')
//         }
//     }, 850)
// }
//
//
// wakeUp(true, (err, time) => {
//     if (!err) {
//         console.log(time)
//         brushTeeth(time, (err, time) => {
//             if (!err) {
//                 console.log(time)
//                 eating(time, (err, time) => {
//                     if (!err) {
//                         console.log(time)
//                         driving(time, (err, time) => {
//                             if (!err) {
//                                 console.log(time)
//                                 jobIsDone(time, (err, money) => {
//                                     if (!err) {
//                                         console.log(money)
//                                         shopping(money, (err, money) => {
//                                             if (!err) {
//                                                 console.log(money)
//                                                 driveHome(money, (err, time) => {
//                                                     if (!err) {
//                                                         console.log(time)
//                                                     } else {
//                                                         console.error(err)
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.error(err)
//                                             }
//                                         })
//                                     } else {
//                                         console.error(err)
//                                     }
//                                 })
//                             } else {
//                                 console.error(err)
//                             }
//                         })
//                     } else {
//                         console.error(err)
//                     }
//                 })
//             } else {
//                 console.error(err)
//             }
//         })
//     } else {
//         console.error(err)
//     }
// })


// Reusable code
//
// wakeUp(true, (err, time) => {
//     if (!err) {
//         console.log(time)
//     } else {
//         console.error(err)
//     }
// })
// brushTeeth(8, (err, time) => {
//     if (!err) {
//         console.log(time)
//     } else {
//         console.error(err)
//     }
// })
//
// eating(8.15, (err, time) => {
//     if (!err) {
//         console.log(time)
//     } else {
//         console.error(err)
//     }
// })
//
// driving(8.35, (err, time) => {
//     if (!err) {
//         console.log(time)
//     } else {
//         console.error(err)
//     }
// })
//
// jobIsDone(9, (err, money) => {
//     if (!err) {
//         console.log(money)
//     } else {
//         console.error(err)
//     }
// })
//
// shopping(300, (err, money) => {
//     if (!err) {
//         console.log(money)
//     } else {
//         console.error(err)
//     }
// })
//
// driveHome(270, (err, time) => {
//     if (!err) {
//         console.log(time)
//     } else {
//         console.error(err)
//     }
// })


