// callback functions ----------------------

// const calc = (func,a,b)=>func(a,b)

// const add = (a,b)=>a+b
// const sub = (a,b)=>a-b
// const mult = (a,b)=>a*b

// console.log(calc(sub,1,2))

// setTimeout function ---------------------
// setTimeout(()=>{console.log("after one second")},1000)

// const timeoutId = setTimeout(() => console.log('This won\'t run'), 1000);
// clearTimeout(timeoutId);

// setInterval ---------------------------


// const x = setInterval(() => {
//   const x = new Date();
//   console.log(x.toLocaleTimeString())
// }, 1000);

// setTimeout(()=>clearInterval(x),10000)

// callback ------------------------------

// const greeting = (name)=>{
//     return (message)=>{
//         console.log(`Hello ${name}, ${message}`);
//     }
// }
// greeting("Meefr")("How are you!")
// const x = greeting("Amr")
// x("How are you!")


// callback hell -------------------------
// const f1 = (callback) => {
//     setTimeout(() => {
//         console.log(1);
//         callback()
//     }, 3000);
// }
// const f2 = (callback) => {
//     setTimeout(() => {
//         console.log(2);
//         callback()
//     }, 1000);
// }
// const f3 = (callback) => {
//     setTimeout(() => {
//         console.log(3);
//         callback()
//     }, 2000);
// }
// f1(()=>{
//     f2(()=>{
//         f3(()=>{
//             console.log("done");
//         })
//     })
// })
// Promise -------------------------------

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let check = false;
//       if (check) resolve("Fetch Data");
//       else reject("Error in Fetch Data");
//     }, 3000);
//   });
// };

// const RequestUserInput = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Request Input");
//     }, 1000);
//   });
// };

// const SendDataToUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let check = true;
//       if (check) resolve("Send Data To user");
//       else reject("Error in Sending data");
//     }, 1500);
//   });
// };

// RequestUserInput(()=>{
//     fetchData(()=>{
//         SendDataToUser(()=>{console.log("Done!");
//         })
//     })
// })
// RequestUserInput()
//   .then((value) => {
//     console.log(value);
//     return fetchData();
//   })
//   .then((value) => {
//     console.log(value);
//     return SendDataToUser();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("done"));




// // Asynchronous 

// async function call(){
//     try {
//         const input = await RequestUserInput();
//         console.log(input);
        
//         const data = await fetchData()
//         console.log(data);
        
//         const send = await SendDataToUser()
//         console.log(send);
//     } catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log("done");
//     }
// }

// call()



// console.log("start")
// setTimeout(() => console.log("mid"), 1000);
// console.log("end")
