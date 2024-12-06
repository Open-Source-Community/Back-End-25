# Advanced JavaScript: Session 2

## Table of Contents

1. [Introduction to Arrays](#introduction-to-arrays)
2. [Working with Objects](#working-with-objects)
3. [Array Methods](#array-methods)
   - [.map()](#map)
   - [.filter()](#filter)
   - [.reduce()](#reduce)
   - [Other Important Array Methods](#other-important-array-methods)
4. [Destructuring Arrays](#destructuring-arrays)
5. [Destructuring Objects](#destructuring-objects)

---

## Introduction to Arrays

Arrays are used to store multiple values in a single variable. They can hold a mix of data types, such as numbers, strings, and objects.

```javascript
const numbers = [1, 2, 3, 4];
const mixedArray = ["Hello", 42, true];
```

### Common Array Operations

- **Access Elements**: `array[index]`
- **Length**: `array.length`
- **Add/Remove Elements**: `push()`, `pop()`, `shift()`, `unshift()`

```javascript
const fruits = ["apple", "banana"];
fruits.push("orange"); // Add at the end
console.log(fruits) // ["apple","banana","orange"]
console.log(fruits.pop()); // Remove from the end -> orange
fruits.unshift("banana") // Add at the begin
console.log(fruits) // ["banana","apple","banana"]
fruits.shift() // Remove from the begin
console.log(fruits) // ["apple","banana"]
```

---

## Working with Objects

Objects are key-value pairs used to store structured data.

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false
};
```

### Accessing Properties

- Dot Notation: `object.property`
- Bracket Notation: `object["property"]`

```javascript
console.log(person.name); // John
console.log(person["age"]); // 30
```

### Adding/Updating Properties

```javascript
person.job = "Developer";
person.age = 31;
```

---

## Array Methods

### .map()

Creates a new array by applying a function to each element of the original array.

```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9]
```

### .filter()

Creates a new array with elements that pass a given condition.

```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

### .reduce()

Reduces an array to a single value by applying a function to an accumulator and each element.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### .find()
Finds the first element that satisfies a condition.
   ```javascript
   const numbers = [1, 2, 3, 4];
   const found = numbers.find(num => num > 2);
   console.log(found); // 3
   ```
### .findIndex()
```javascript
const arr = [1, 2, 3];
const index1 = arr.findIndex((x) => x > 2); 
const index2 = arr.findIndex((x) => x > 3); 

console.log(index1);// 2 
console.log(index2);//-1 
```

### .every()
Checks if all elements satisfy a condition.
   ```javascript
   const numbers = [2, 4, 6];
   console.log(numbers.every(num => num % 2 === 0)); // true
   ```
### .some()
Checks if at least one element satisfies a condition.
   ```javascript
   const numbers = [1, 2, 3];
   console.log(numbers.some(num => num > 2)); // true
   ```
### .sort()
Sorts an array in place.
   ```javascript
   const numbers = [3, 1, 4];
   numbers.sort((a, b) => a - b); // Ascending
   console.log(numbers); // [1, 3, 4]
   numbers.sort((a, b) => b - a); // Descending
   console.log(numbers); // [4, 3, 1]
   ```

---

## Destructuring Arrays
### Basic Array Destructuring:
Instead of manually accessing array elements, you can destructure them into variables.

  ```javascript
  Copy code
  const arr = [1, 22, 3];

  // Traditional (bad) way
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  console.log(a, b, c); // Output: 1 22 3

  // Using Destructuring (good way)
  const [a1, b1, c1] = arr;
  console.log(a1, b1, c1); // Output: 1 22 3

  // Skipping values in the array
  const [a2, , c2] = arr;
  console.log(a2, c2); // Output: 1 3
  ```
### Swapping Values:
Destructuring makes swapping values easier:
  ```javascript
  Copy code
  let num1 = 10;
  let num2 = 20;
  console.log(num1, num2); // Output: 10 20

  // Traditional swap using a temporary variable
  let temp = num1;
  num1 = num2;
  num2 = temp;
  console.log(num1, num2); // Output: 20 10

  // Using Destructuring to swap values
  [num1, num2] = [num2, num1];
  console.log(num1, num2); // Output: 20 10
  ```
### Destructuring in Functions:
You can also destructure values returned from functions.
  ```javascript
  Copy code
  function fun(Name, age) {
    return [Name + " Khaled", age + 1];
  }
  [Name, age] = fun("Amr", 20);
  console.log(Name, age); // Output: "Amr Khaled", 21
  ```
### Destructuring Nested Arrays:
You can destructure nested arrays by using additional square brackets.
  ```javascript
  Copy code
  const nestedArray = [
    [1, 2],
    [4, 6],
  ];

  // Destructuring nested arrays
  [ne1, ne2] = nestedArray; // [ [1, 2], [4, 6] ]
  [[ne11, ne12], [ne21, ne22]] = nestedArray; 
  console.log(ne11, ne12); // Output: 1 2
  console.log(ne21, ne22); // Output: 4 6
  ```
## Destructuring Objects
### Basic Object Destructuring:
  ```javascript
  const university = {
    name: "Ain Shams",
    location: "Cairo",
    TAs: ["ahmed", "mohamed", "anas", "ali"],
    Drs: {
      ahmedSalah: {
        Age: 40,
        teach: ["OS", "Algo"],
      },
      hanan: {
        Age: 35,
        teach: ["IOT", "Robot"],
      },
    },
  };

  // Destructuring top-level properties
  const { name, location, TAs } = university;
  console.log(name, location, TAs); // Output: "Ain Shams", "Cairo", ["ahmed", "mohamed", "anas", "ali"]
  ```
Renaming Variables with Destructuring:
You can rename variables during destructuring:

  ```javascript
  const { name: uniName, location, TAs } = university;
  console.log(uniName, location, TAs); // Output: "Ain Shams", "Cairo", ["ahmed", "mohamed", "anas", "ali"]
  ```
### Default Values in Destructuring:
If a property doesn’t exist in the object, you can provide a default value:

  ```javascript
  const { students = [], TAs } = university;
  console.log(students, TAs); // Output: [], ["ahmed", "mohamed", "anas", "ali"]
  ```
### Destructuring Nested Objects:
To destructure nested objects, reference the nested structure:

  ```javascript
  const {
    ahmedSalah: {
      Age,
      teach: [Sub1, Sub2],
    },
  } = university.Drs;
  console.log(Age, Sub1, Sub2); // Output: 40, "OS", "Algo"
  ```
### Common Mistake:
Accessing properties at the wrong level (e.g., trying to destructure ahmedSalah directly from university instead of university.Drs):
  ```javascript
  const { ahmedSalah } = university; // This would be undefined
  console.log(ahmedSalah); // Output: undefined
  ```
---

## Task

1. **Check all references.** 
2. [TaskLink](./task.md)

### Optional

3. [Questions](./questions.md)

---

## References

### Specific Refs:  

- [MDN Web Docs: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Optional
- [MDN Web Docs: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
- [MDN Web Docs: setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs: Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### General Refs:

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)


<img src="https://i.ibb.co/HK4qMjj/OSCLogo.png" alt="OSC-FREE-PALESTINE" width="300px" height="300px" >