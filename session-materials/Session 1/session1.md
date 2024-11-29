# JavaScript Basics

## Table of Contents

1. [Brief Intro to JavaScript](#brief-intro-to-javascript)
2. [Values & Variables](#values--variables)
3. [Data Types](#data-types)
4. [Let, const, and var](#let-const-and-var)
5. [Comments](#comments)
6. [Basic Operators](#basic-operators)
7. [Operator Precedence](#operator-precedence)
8. [If / else Statements](#if--else-statements)
11. [Type Conversion and Coercion](#type-conversion-and-coercion)
12. [Boolean Logic & Logical, Equality Operators](#boolean-logic--logical-equality-operators)
13. [Statements and Expressions](#statements-and-expressions)

9. [Strings](#strings)
10. [Template Literals](#template-literals-not-a-method-but-important)
14. [Functions and Arrow Functions](#functions-and-arrow-functions)
15. [Intro to Arrays and Objects](#intro-to-arrays-and-objects)
16. [Loops](#loops)
18. [Task](#task)
19. [References](#for-more-references)
---

## Brief Intro to JavaScript

JavaScript is a versatile programming language primarily used to create dynamic and interactive content on web pages. It enables developers to implement features such as form validation, animations, and data manipulation.

---
## Different between Java & JavaScript
| Java    | JavaScript |
| -------- | ------- |
| It is one of the most popular programming languages. It is an **object-oriented programming language** and has a virtual machine platform that allows you to create compiled programs that run on nearly every platform. Java promised, “Write Once, Run Anywhere  | It is a light-weighted programming language (“**client-side scripting language**”) for developing interactive web pages. It can insert dynamic text into the HTML elements. JavaScript is also known as the browser’s language.|



## Values & Variables

Values represent data, while variables store these values for reuse. You can declare variables using `let`, `const`, or `var`:

```javascript
let age = 25;
const name = "John";
var isStudent = true;
```

---

## Data Types

JavaScript has several data types, categorized as:

- **Primitive**: 
1. Numbers.
2. Strings.
3. Booleans.
4. Undefined.
5. Null.
6. BigInt.
7. Symbol.
- **Non-Primitive**: 
1. Objects.
2. Arrays.

```javascript
let num = 10; // Number
let x; // undefined  
let text = "Hello"; // String
let isTrue = false; // Boolean
let obj = {}; // Object
```

---

## Comments 
symbole used for comments in javaScript is `// Single line` for single line and `/* Multi-lines */` for multi-lines

---

## Let, const, and var

- **`let`**: Block-scoped, mutable.
- **`const`**: Block-scoped, immutable (value cannot be reassigned).
- **`var`**: Function-scoped, mutable (avoid using it in modern code).

```javascript
let count = 10;
const PI = 3.14;
var total = 0; // Older syntax
```

---
## Basic Operators

Operators perform operations on values:

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Assignment: `=`, `+=`, `-=`
- Comparison: `===`, `>`, `<`
- Logical: `&&`, `||`, `!`

```javascript
let sum = 10 + 5; // 15
let isGreater = 10 > 5; // true
```

---

## Operator Precedence

Operator precedence determines the execution order in complex expressions. Use parentheses to control precedence.

```javascript
let result = 10 + 5 * 2; // 20, multiplication first
let corrected = (10 + 5) * 2; // 30
```

---


## If / else Statements

Conditional statements execute code blocks based on conditions:

```javascript
if (age > 18) {
  console.log("Adult");
} else if (age == 18) {
  console.log("you are eighteen");
} else {
  console.log("Minor");
}
```

---

## Type Conversion and Coercion

Type conversion explicitly changes types, while coercion is implicit:

```javascript
let num = "5";
console.log(Number(num)); // 5
console.log("5" + 10); // "510" (coercion)
```

---

## Boolean Logic & Logical, Equality Operators

Boolean logic uses `&&` (AND), `||` (OR), and `!` (NOT). Equality operators include `==` (loose equality) and `===` (strict equality):

```javascript
console.log(true && false); // false
console.log(10 === "10"); // false
```

---

## Statements and Expressions

- **Expressions** produce values: `5 + 5`.
- **Statements** perform actions: `if (true) {}`.

---
## Strings
### Basic Methods 

  ```javascript
   let str = "JavaScript";
   ```

1. **`charAt(index)`**  
   Returns the character at the specified index.
   ```javascript
   console.log(str.charAt(4)); // Output: S
   ```

2. **`charCodeAt(index)`**  
   Returns the Unicode value of the character at the specified index.
   ```javascript
   console.log(str.charCodeAt(4)); // Output: 83
   ```

3. **`concat(string1, string2, ...)`**  
   Concatenates strings.
   ```javascript
   console.log("Hello".concat(" ", "World!"," ","Meefr" )); // Output: Hello World!
   
   // same as 
   console.log("Hello " + "World! " + "Meefr")
   ```

4. **`includes(substring, start)`**  
   Checks if a string contains a specified substring.
   ```javascript
   console.log(str.includes("Script")); // Output: true
   ```

5. **`indexOf(substring, start)`**  
   Returns the index of the first occurrence of the substring, or -1 if not found.
   ```javascript
   console.log(str.indexOf("a")); // Output: 1
   ```

6. **`lastIndexOf(substring, start)`**  
   Returns the index of the last occurrence of the substring.
   ```javascript
   console.log(str.lastIndexOf("a")); // Output: 3
   ```

### Case Conversion

7. **`toUpperCase()`**  
   Converts a string to uppercase.
   ```javascript
   console.log(str.toUpperCase()); // Output: JAVASCRIPT
   ```

8. **`toLowerCase()`**  
   Converts a string to lowercase.
   ```javascript
   console.log(str.toLowerCase()); // Output: javascript
   ```

### Substrings and Slicing

9. **`substring(start, end)`**  
   Extracts characters between two indices.
   ```javascript
   console.log(str.substring(0, 4)); // Output: Java
   ```

10. **`slice(start, end)`**  
    Extracts part of a string, supports negative indices.
    ```javascript
    console.log(str.slice(-6)); // Output: Script
    ```

11. **`split(separator, limit)`**  
    Splits a string into an array based on a separator.
    ```javascript
    console.log("Hello World".split(" ")); // Output: ["Hello", "World"]
    ```

### Trimming and Padding

12. **`trim()`**  
    Removes whitespace from both ends of a string.
    ```javascript
    console.log("  Hello World  ".trim()); // Output: Hello World
    ```

13. **`trimStart()` / `trimEnd()`**  
    Removes whitespace from the start or end of a string.
    ```javascript
    console.log("  Hello".trimStart()); // Output: Hello
    ```

14. **`padStart(targetLength, padString)`**  
    Pads the beginning of the string to a specified length.
    ```javascript
    console.log("123".padStart(5, "0")); // Output: 00123
    ```

15. **`padEnd(targetLength, padString)`**  
    Pads the end of the string.
    ```javascript
    console.log("123".padEnd(5, "0")); // Output: 12300
    ```

### Replacing

16. **`replace(pattern, replacement)`**  
    Replaces the first match of a pattern with a replacement.
    ```javascript
    console.log("Hello World".replace("World", "JavaScript")); // Output: Hello JavaScript
    ```

17. **`replaceAll(pattern, replacement)`**  
    Replaces all matches of a pattern.
    ```javascript
    console.log("aaa".replaceAll("a", "b")); // Output: bbb
    ```

### Search

18. **`match(regex)`**   `Need to know regex !`

    Matches a string against a regular expression and returns the matches.
    ```javascript
    console.log("JavaScript".match(/a/g)); // Output: ["a", "a"]
    ```

19. **`search(regex)`**  
    Searches for a match using a regular expression and returns the index of the match.
    ```javascript
    console.log("JavaScript".search(/S/)); // Output: 4
    ```


## Template Literals (Not a method but important)

- Template literals use backticks for string interpolation and multi-line strings.
  ```javascript
  let name = "John";
  console.log(`Hello, ${name}!`); // Output: Hello, John!
---
- Extension Retriever 
  ```JavaScript
  let x = "image.png"
  // method 1 not generic 
  let ext = x.slice(-3)
  console.log(ext);
  // method 2 generic 
  ext = x.split(".")
  const index = ext.length - 1 
  console.log(ext[index])
  ```
--- 
## Functions and Arrow Functions [No need for all this table to understand]

| **Feature**           | **Function**                       | **Arrow Function**                  |
|-----------------------|------------------------------------|-------------------------------------|
| **Syntax**            | Uses the `function` keyword.       | Uses `=>` arrow syntax.             |
| **`this` Binding**    | Dynamic (depends on how called).   | Lexical (inherits from surrounding scope). |
| **`arguments` Object**| Available.                        | Not available; use rest parameters instead. |
| **Constructor Support**| Yes, can be used as constructors. | No, cannot be used as constructors. |
| **Method Suitability**| Ideal for object methods.         | Ideal for callbacks and non-method functions. |
| **Implicit Return**   | Requires `return` for output.     | Supports implicit return for single-line expressions. |

---

### Examples

#### Syntax Example:

- **Function**
  ```javascript
  function add(a, b) {
    return a + b;
  }
  ```

- **Arrow Function**
  ```javascript
  const add = (a, b) => a + b;
  // or 
  const add = (a,b) => { return a+b };
  ```

#### `this` Binding Example:

- **Function**
  ```javascript
  const obj = {
    value: 10,
    method: function () {
      console.log(this.value); // Refers to obj
    }
  };
  obj.method(); // Output: 10
  ```

- **Arrow Function**
  ```javascript
  const obj = {
    value: 10,
    method: () => {
      console.log(this.value); // Refers to outer scope
    }
  };
  obj.method(); // Output: undefined
  ```

#### Constructor Example:

- **Function**
  ```javascript
  function Person(name) {
    this.name = name;
  }
  const person = new Person("John");
  console.log(person.name); // Output: John
  ```

- **Arrow Function**
  ```javascript
  const Person = (name) => {
    this.name = name;
  };
  const person = new Person("John"); // Error: Person is not a constructor
  


Functions encapsulate reusable code:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const arrowGreet = (name) => `Hello, ${name}!`;
```

---

## Intro to Arrays and Objects

- **Arrays** store ordered collections:

```javascript
let fruits = ["Apple", "Banana"];
```

- **Objects** store key-value pairs:

```javascript
let person = { name: "Alice", age: 30 };
```

---

## Loops

Loops repeat code until a condition is met:

- **for loop**:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- **while loop**:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
## Task
1. Solve this Tutorial: [Tutorial Link](https://edabit.com/tutorial/javascript)
2. Solve this Practice : [Practice Link](https://edabit.com/practice)
3. Solve this problems [Problem Solving](./task.md)
---
## For more references:
**[Interview Questions 1 - with solutions](https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/)**

**[Interview Questions 2 - with solutions](https://builtin.com/software-engineering-perspectives/javascript-interview-questions)**

