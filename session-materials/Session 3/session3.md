# Advanced JavaScript: Session 2

## Table of Contents

1. [Callbacks](#callbacks)
2. [setTimeout](#settimeout)
3. [setInterval](#setinterval)
4. [Promises](#promises)
5. [Async and Sync](#async-and-sync)
6. [Task](#task)
7. [References](#references)

---

## Callbacks

A callback is a function passed as an argument to another function and executed after some operation.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData(message => console.log(message));
```

---

## setTimeout

### Delaying Execution

`setTimeout` schedules a function to execute after a specified delay in milliseconds.

```javascript
setTimeout(() => {
  console.log('Hello, World!');
}, 1000); // Prints 'Hello, World!' after 1 second
```

You can also clear the timeout using `clearTimeout()` if needed:

```javascript
const timeoutId = setTimeout(() => console.log('This won\'t run'), 1000);
clearTimeout(timeoutId);
```

---

## setInterval

### Repeating Execution

`setInterval` schedules a function to repeatedly execute at a specified interval in milliseconds.

```javascript
const intervalId = setInterval(() => {
  console.log('Repeating every second');
}, 1000);
```

You can clear the interval using `clearInterval()` to stop the repeated execution:

```javascript
clearInterval(intervalId);
```

---

## Promises

Promises represent the eventual completion (or failure) of an asynchronous operation.

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData.then(data => console.log(data));
```
### Promise status: 
1. Pending -> undefined
2. Fulfilled -> result 
3. Rejected -> error

### Chaining Promises

```javascript
fetchData
  .then(data => data.toUpperCase())
  .then(upper => console.log(upper));
```

### Error Handling

```javascript
fetchData
  .then(data => {
    throw new Error("Something went wrong");
  })
  .catch(error => console.error(error));
```

---

## Async and Sync

### Synchronous Code

Code that runs sequentially, blocking further execution until the current task completes.

```javascript
console.log("Start");
console.log("End");
```

### Asynchronous Code

Code that allows tasks to run in the background without blocking the main thread.

```javascript
console.log("Start");
setTimeout(() => console.log("Middle"), 1000);
console.log("End");
```

### Async/Await

A modern way to work with Promises, making asynchronous code look synchronous.

```javascript
async function fetchData() {
  const data = await new Promise(resolve => setTimeout(() => resolve("Data fetched"), 1000));
  console.log(data);
}

fetchData();
```

---

## Task

1. Implement a function that fetches data using Promises and Async/Await.
    - need to search about fetch.
---

## References

### Specific Refs:  
- [MDN Web Docs: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
- [MDN Web Docs: setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs: Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### Optional Refs:
- [JS Behind the scene]()