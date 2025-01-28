# JavaScript Homework: Promises, Async/Await, and Event Loop

## **Homework Plan**

---

### **Part 1: Callback Hell**

#### 1. **Rewrite Callback Hell with Promises**

- Given the following callback hell code:
  ```javascript
  setTimeout(() => {
    console.log("Hello1");
    setTimeout(() => {
      console.log("Hello2");
      setTimeout(() => {
        console.log("Hello3");
      }, 2000);
    }, 1000);
  }, 1000);
  ```
- Rewrite it using **Promises**.

#### 2. **Challenge**:

- Extend the above code to add **Hello4** after **Hello3**, but only if a condition (e.g., a variable `success`) is `true`. If not, reject the promise.

---

### **Part 2: Async/Await**

#### 1. **Refactor Promises with Async/Await**

Convert the following code to use `async/await`:

```javascript
new Promise((resolve) => {
  setTimeout(() => {
    console.log("Hello1");
    resolve();
  }, 1000);
}).then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello2");
      resolve();
    }, 1000);
  });
});
```

#### 2. **API Call with Async/Await**

- Write a function `fetchPosts` that fetches data from `https://jsonplaceholder.typicode.com/posts` using `async/await`.

---

#### 3. **Error Handling**

- Modify `fetchPosts` to handle potential errors (e.g., network failure or invalid URL) using `try...catch`.

---

#### 1. Predict and write down the output of the following code:

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
  console.log("Microtask: Promise.then");
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

#### 2. Write a detailed explanation of the **event loop** behavior in the above code.
