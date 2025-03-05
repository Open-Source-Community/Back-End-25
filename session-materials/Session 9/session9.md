# Session 9 - Authentication & Authorization

# Agenda

1. [Session Overview](#Session-Overview)
2. [Session Objectives](#Session-Objectives)
3. [Packages Needed](#Packages-Needed)
4. [MongoDB Setup](#MongoDB-Setup)
5. [Auth Routes](#Auth-Routes)
6. [Auth Controller](#Auth-Controller)
7. [Auth Middleware](#Query-Example)
8. [Cookies](#Cookies)
9. [JWT (JSON Web Tokens)](#JWT-JSON-Web-Tokens)
10. [Auth Middleware](#Auth-Middleware)
10. [Task](#Task)
11. [References](#References)

## Session Overview

In this session, we will cover the essential concepts of Authentication and Authorization. These two topics are fundamental for managing user access and ensuring the security of web applications. We'll explore how to implement both in a web application, using modern techniques such as JWT (JSON Web Tokens) and cookies for secure token management.

## Session Objectives

By the end of this session, you should be able to:

- Understand the difference between authentication and authorization.
- Implement authentication using JWT.
- Use cookies to manage authentication tokens.
- Set up a basic authentication flow in a Node.js application with MongoDB.
- Protect routes using middleware to ensure proper authorization.

## Packages Needed

To get started with authentication and authorization in a Node.js environment, you will need the following packages:

- `express`: A minimal and flexible Node.js web application framework.
- `jsonwebtoken`: A library to sign, verify, and decode JWT tokens.
- `bcryptjs`: A library for hashing passwords.
- `cookie-parser`: A middleware to parse cookies.
- `mongoose`: An ODM (Object Data Modeling) library for MongoDB.

To install the required packages, run the following command:

```bash
npm install express jsonwebtoken bcryptjs cookie-parser mongoose
```

## MongoDB Setup

### connectDB.js file

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
```

use it in server.js in callback function called when server start listening

### User Schema - users.module.js

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Posts",
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
```

### Posts Schema - posts.module.js

```js
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
});
const posts = mongoose.model("Posts", postSchema);
module.exports = posts;
```

## Auth Routes

You will need routes for user registration, login, and logout. Below is an example of setting up these routes in Express:

```javascript
const { Router } = require("express");
const router = Router();
const controller = require("../controller/auth.controller");

router.post("/signup", controller.signUp);
router.post("/signin", controller.signIn);
router.get("/signout", controller.signOut);

module.exports = router;
```

---

## Auth Controller

In your controller, you will define the logic for registering, logging in, and logging out users.

### 1. SignUp

```js
const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    // 2 ways to encrypt password
    // ---- 1 -> here
    // ---- 2 -> at user module
    const newUser = new Users({
      username,
      email,
      password: password,
    });
    await newUser.save();
    res.status(201).send({
      status: 201,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
```

### 2. SignIn

```js
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send({
        status: 400,
        msg: "invalid email or password",
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const token = createToken(user._id);
      res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });
      return res.status(200).send({
        status: 200,
        data: user,
      });
    } else {
      return res.status(400).send({
        status: 400,
        msg: "Incorrect password",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      msg: "Server Error",
    });
  }
};
```

### 1. SignOut

```js
const signOut = async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.status(200).send({
    status: 200,
    msg: "User logged out successfully",
  });
};
```

---

## Cookies

Cookies are used to store JWT tokens in the user's browser. This helps with session management and maintaining user login status. In this session, we will use `cookie-parser` to manage cookies.

Here's an example of setting and clearing cookies:

```javascript
// Setting cookie
res.cookie("token", token, {
  httpOnly: true, // Makes the cookie accessible only by the server
  maxAge: 3600000, // Sets the cookie to expire in 1 hour (in milliseconds)
});

// Clearing cookie
res.clearCookie("token");
```

To enhance the cookie settings by adding more properties like `httpOnly` and `maxAge`, you can customize the `cookie` options like this:

### Explanation of options:

1. **`httpOnly: true`**: Ensures the cookie cannot be accessed by JavaScript, providing protection against XSS attacks.
2. **`maxAge: 3600000`**: Defines how long the cookie will be valid (in milliseconds). In this example, it's set to 1 hour.
3. **`secure: true`**: If you are in a production environment, this will ensure that the cookie is only sent over HTTPS.

You can modify these properties as needed for your session management and security.

## JWT (JSON Web Tokens)

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. In this session, we'll use JWT for user authentication. A typical JWT consists of three parts:

- Header: Specifies the algorithm used for signing the token.
- Payload: Contains the claims (data about the user).
- Signature: Ensures the integrity of the token.

Here's how you can generate a JWT:

```javascript
const token = jwt.sign({ userId: user._id }, "yourSecretKey", {
  expiresIn: "1h",
});
```

### `Note` Don't share 'Secret Key' in public

Here's how you can verify token

```js
jwt.verify(token, "yourSecretKey"),
  (err, decodedToken) => {
    if (err) {
      // handel error here
    } else {
      // token is correct and decoded to the plain text
    }
  };
```

---

## Auth Middleware

To protect your routes and ensure only authenticated users can access them, we will create a middleware function that checks if the user is authenticated by verifying their JWT.

Here’s an example of an authentication middleware:

```javascript
const authentication = (req, res, next) => {
  const token = req.cookies.token;
  // verification here
  if (token) {
    jwt.verify(token, "yourSecretKey"),
      (err, decodedToken) => {
        if (err) {
          return res.status(401).send({
            status: 401,
            msg: "UnAuthorized access",
          });
        } else {
          next();
        }
      };
  } else {
    return res.status(401).send({
      status: 401,
      msg: "UnAuthorized access",
    });
  }
  next();
};
```

Here's an example of an authorization middleware: 

```js
const checkUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - invalid token" });

  req.userId = decoded.id;
  console.log(req.userId);
  
  // Check if the user exists
  const user = await Users.findById(req.userId).select("-password");
  if (!user) {
    return res.status(404).json({ status: 404, message: "User not found" });
  }

  req.user = user; // Attach the user to the request
  next();
};
```

## Task

[Task file](./task.md)

---

## References

### Specific Refs:

- [JWT NodeJs - Playlist](https://youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&si=30BiiV5czOxrSQgT)
- [JWT Docs](https://www.npmjs.com/package/jsonwebtoken)
- [JWT Debugger](https://jwt.io/)
- [Cookie Parser NPM](https://www.npmjs.com/package/cookie-parser)
- [Bcrypt NPM](https://www.npmjs.com/package/bcrypt)


