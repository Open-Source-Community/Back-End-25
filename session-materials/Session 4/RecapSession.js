//Promises
//async await
//js behind the scenes

///////////////////////////////////////////////////////////////////////////////////////

// setTimeout(function () {
//   console.log("Hello1");
// }, 1000);
// setTimeout(function () {
//   console.log("Hello2");
// }, 1000);
// what will be the output of this code? & why?
//how to solve this problem?

// setTimeout(function () {
//   console.log("Hello1");
//   setTimeout(function () {
//     console.log("Hello2");
//   }, 1000);
// }, 1000);

///////////////////////////////////////////////////////////////////////////////////////

// setTimeout(function () {
//   console.log("Hello1");
//   setTimeout(function () {
//     console.log("Hello2");
//     setTimeout(function () {
//       console.log("Hello3");
//       setTimeout(function () {
//         console.log("Hello4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//change the timw for hello3 to be 2000ms
// this called as (callback hell) that's why we use promises

///////////////////////////////////////////////////////////////////////////////////////

// new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve();
//   } else {
//     reject();
//   }
// })
//   .then(() => {
//     console.log("Call then");
//   })
//   .catch(() => {
//     console.log("Call catch");
//   });

//what will happen if swap the resolve with reject?
//we can assign this promise to a variable and use it later

// let p = new Promise((resolve, reject) => {
//   console.log("Start promise");
//   const success = false;
//   if (success) {
//     console.log("Call resolve");
//     resolve();
//   } else {
//     console.log("Call reject");
//     reject();
//   }
// });

// console.log("After promise");

// p.then(() => {
//   console.log("Call then");
// }).catch(() => {
//   console.log("Call catch");
// });

//that mean the resolve and reject is async

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello1");
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Hello2");
//     }, 1000);
//   });

// take care we don't but resolve in the last setTimeout

///////////////////////////////////////////////////////////////////////////////////////

// how to solve the callback hell using promises
//do it yourself

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello1");
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Hello2");
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Hello3");
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Hello4");
//     }, 1000);
//   });
///////////////////////////////////////////////////////////////////////////////////////

//asyn & await

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         resolve(data);
//       });
//   });
// }

// replace new Promise with async

// async function myPromise() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
// }

//replace then with await

// async function myPromise() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

///////////////////////////////////////////////////////////////////////////////////////

// now lets take a look at the js behind the scenes how it works

// function first() {
//   console.log("first function starts");
//   second();
//   console.log("first function ends");
// }
// function second() {
//   console.log("second function starts");
//   third();
//   console.log("second function ends");
// }
// function third() {
//   console.log("third function starts");
//   console.log("third function ends");
// }
// first();

//let see the output of this code and how it works behind the scenes

// web apis (callback based) (promises based)
//task queue
//microtask queue (promises ,queueMicrotask  )
//eventloop

// console.log("Start");
// setTimeout(() => {
//   console.log("Hello");
// }, 1000);
// console.log("End");
// wahat will be the output of this code?
//change the time to 0

// challenge
// console.log("Script start");
// setTimeout(() => {
//   console.log("Macrotask: setTimeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Microtask: Promise.then");
// });
// queueMicrotask(() => {
//   console.log("Microtask: queueMicrotask");
// });
// console.log("Script end");

//hard challenge
// console.log("Script start");
// setTimeout(() => {
//   console.log("Macrotask 1: setTimeout");

//   Promise.resolve().then(() => {
//     console.log("Microtask: Promise in setTimeout");
//   });

//   queueMicrotask(() => {
//     console.log("Microtask: queueMicrotask in setTimeout");
//   });
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Microtask: Promise.then ");
// });

// queueMicrotask(() => {
//   console.log("Microtask: queueMicrotask 1");

//   queueMicrotask(() => {
//     console.log("Microtask: queueMicrotask 2");
//   });
// });

// setTimeout(() => {
//   console.log("Macrotask 2: setTimeout");
// }, 0);
// console.log("Script end");
