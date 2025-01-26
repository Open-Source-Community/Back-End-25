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
//   const y = `${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`
//   // console.log(x.toLocaleTimeString())
//   console.log(y)
// }, 1000);

// setTimeout(()=>clearInterval(x),10000)

// Promise -------------------------------

// const delay =(ms)=> new Promise((resolve)=>setTimeout(resolve,ms))
// const countDown = async(x)=>{
//   for(i=x;i>=1;i--){
//     console.log(i)
//     await delay(1000)
//   }
//   console.log("Surprise!!!")
// }
// countDown(3)

// // Asynchronous 
// console.log("start")
// setTimeout(() => console.log("mid"), 1000);
// console.log("end")
