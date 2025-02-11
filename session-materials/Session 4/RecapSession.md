# Recap Session

## Promises, Async/Await, and JavaScript Behind the Scenes

### Promises

```javascript
// setTimeout example
setTimeout(function () {
  console.log("Hello1");
}, 1000);
setTimeout(function () {
  console.log("Hello2");
}, 1000);
// What will be the output of this code? & why?
// How to solve this problem?
```

<details>
  <summary>Answer</summary>

```javascript
setTimeout(function () {
  console.log("Hello1");
  setTimeout(function () {
    console.log("Hello2");
  }, 1000);
}, 1000);
```

## </details>

---

---

```javascript
// Nested setTimeout example (callback hell)
setTimeout(function () {
  console.log("Hello1");
  setTimeout(function () {
    console.log("Hello2");
    setTimeout(function () {
      console.log("Hello3");
      setTimeout(function () {
        console.log("Hello4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// which time should change to make Hello 3 take 2000ms?
// This is called (callback hell), that's why we use promises
```

```javascript
// Promise example
new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("Call then");
  })
  .catch(() => {
    console.log("Call catch");
  });
// What will happen if we swap the resolve with reject?
// We can assign this promise to a variable and use it later
```

```javascript
let p = new Promise((resolve, reject) => {
  console.log("Start promise");
  const success = false;
  if (success) {
    console.log("Call resolve");
    resolve();
  } else {
    console.log("Call reject");
    reject();
  }
});

console.log("After promise");

p.then(() => {
  console.log("Call then");
}).catch(() => {
  console.log("Call catch");
});
// That means the resolve and reject are async
```

<details>
  <summary>Output</summary>

```
Start promise
Call reject
After promise
Call catch
```

</details>

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello1");
    resolve();
  }, 1000);
}).then(() => {
  setTimeout(() => {
    console.log("Hello2");
  }, 1000);
});
// Take care we don't put resolve in the last setTimeout
```

### Solving Callback Hell Using Promises

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello1");
    resolve();
  }, 1000);
})
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hello2");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hello3");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log("Hello4");
    }, 1000);
  });
```

### Async & Await

```javascript
// Function using Promise
function myPromise() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
}
```

```javascript
// replace new Promise with async

async function myPromise() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
```

```javascript
// Function using async/await
async function myPromise() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
}
```

### JavaScript Behind the Scenes

```javascript
// Function call stack example
function first() {
  console.log("first function starts");
  second();
  console.log("first function ends");
}
function second() {
  console.log("second function starts");
  third();
  console.log("second function ends");
}
function third() {
  console.log("third function starts");
  console.log("third function ends");
}
first();
// Let's see the output of this code and how it works behind the scenes
```

### Event Loop and Task Queues

```javascript
// Event loop example
console.log("Start");
setTimeout(() => {
  console.log("Hello");
}, 1000);
console.log("End");
// What will be the output of this code?
// Change the time to 0
```

### Challenge 1

```javascript
console.log("Script start");
setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});
queueMicrotask(() => {
  console.log("Microtask: queueMicrotask");
});
console.log("Script end");
```

<details>
  <summary>Output</summary>

```
Script start
Script end
Microtask: Promise.then
Microtask: queueMicrotask
Macrotask: setTimeout
```

</details>

### Challenge 2

```javascript
console.log("Script start");
setTimeout(() => {
  console.log("Macrotask 1: setTimeout");

  Promise.resolve().then(() => {
    console.log("Microtask: Promise in setTimeout");
  });

  queueMicrotask(() => {
    console.log("Microtask: queueMicrotask in setTimeout");
  });
}, 0);
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then ");
});

queueMicrotask(() => {
  console.log("Microtask: queueMicrotask 1");

  queueMicrotask(() => {
    console.log("Microtask: queueMicrotask 2");
  });
});

setTimeout(() => {
  console.log("Macrotask 2: setTimeout");
}, 0);
console.log("Script end");
```

<details>
  <summary>Output</summary>

```
Script start
Script end
Microtask: Promise.then
Microtask: queueMicrotask 1
Microtask: queueMicrotask 2
Macrotask 1: setTimeout
Microtask: Promise in setTimeout
Microtask: queueMicrotask in setTimeout
Macrotask 2: setTimeout
```

</details>

### Challege about async/await

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello1");
    resolve();
  }, 1000);
}).then(() => {
  setTimeout(() => {
    console.log("Hello2");
  }, 1000);
});
// convert this code to async/await
```

<details>
  <summary>Answer</summary>
  
```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
await delay(1000); // Wait for 1 second
console.log("Hello1");

await delay(1000); // Wait for another 1 second
console.log("Hello2");
}

main();

```
## </details>


```
