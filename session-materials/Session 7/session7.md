# Session 7 - Backend File and Folder Structure

# Agenda

1. [Session Overview](#Session-Overview)
2. [Session Objectives](#Session-Objectives)
3. [Recommended Project Structure](#Recommended-Project-Structure)
4. [Route file Example](#Route-file-Example)
5. [Controller file Example](#Controller-file-Example)
6. [Server.js file](#server-file)
7. [Query Example](#Query-Example)
8. [Params Example](#Params-Example)
9. [Best Practices](#Best-Practices)
10. [Task](#Task)

## Session Overview

In this session, we will focus on restructuring backend project files and folders for better maintainability, scalability, and readability. Previously, we implemented CRUD operations using files instead of a database. Now, our goal is to refactor the code and apply best practices in structuring backend applications.

## Session Objectives

By the end of this session, you will:

- Understand how to structure a backend project properly.
- Learn the separation of concerns in backend development.
- Refactor your existing code into a well-organized structure.
- Improve code maintainability and scalability.

## Recommended Project Structure

Below is the recommended structure for organizing your backend files:

```
📦 project-root
├── 📁 controllers  # Handles business logic
│   ├── fileController.js
│   ├── userController.js
│
├── 📁 models       # Data models (if applicable)
│   ├── fileModel.js
│   ├── userModel.js
│
├── 📁 routes       # API routes
│   ├── fileRoutes.js
│   ├── userRoutes.js
│
├── 📁 middlewares  # Middleware functions (e.g., validation, authentication)
│   ├── authMiddleware.js
│   ├── errorHandler.js
│
├── 📁 utils        # Utility functions (helpers)
│   ├── fileHelper.js
│   ├── responseHelper.js
│
├── 📁 config       # Configuration files (e.g., environment variables)
│   ├── config.js
│
├── server.js       # Entry point of the application
├── package.json    # Project metadata and dependencies
└── README.md       # Documentation
```

## Route file Example

### OSC_CREW.router.js

```js
const express = require("express");

// osc_crew controller
const controller = require("../controllers/OSC-Crew-controller");

const router = express.Router();

router.get("/", controller.get_all_data);
// Rest of routes

module.exports = router;
```

## Controller file Example

### OSC_CREW.controller

```js
/* load data needed code is here
 *
 */
const get_all_data = (req, res) => {
  res.status(200).send({
    status: 200,
    data: osc_data,
  });
};

// Rest of methods for osc_crew logic

module.exports = {
  get_all_data,
  // Rest of methods
};
```

## Server file
```js
const express = require("express")

const app = express()
const PORT = 3000
app.use(express.json())

// Routers import
const osc_crew_router = require("./routes/OSC-Crew.router")
const products_router = require('./routes/products.router')

// Routers use
app.use('/osc-crew',osc_crew_router)
app.use('/products',products_router)

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
```

## Query Example

Get data by **type** [Committees, Highboard or All data]

```js
// osc_data = ALL DATA
const get_all_data = (req, res) => {
  const { type } = req.query;
  if (type) {
    let data = null;
    if (type.toLowerCase() === "committees") data = osc_data["Committees"];
    else if (type.toLowerCase() === "highboard") data = osc_data["Highboard"];
    if (data)
      return res.status(200).send({
        type: type,
        status: 200,
        data: data,
      });
    else
      return res.status(404).send({
        type: type,
        status: 404,
        data: "Not found !",
      });
  }
  res.status(200).send({
    status: 200,
    data: osc_data,
  });
};
```



## Params Example

Get head name of a given committee `localhost:3000/osc_crew/head/backend` result `meefr`

```js

// Helper function 
const find_head(committee){
    const heads = osc_data["Highboard"]["Heads"];
    committee = committee.toLowerCase(); 
    for (const category in heads) {
      for (const key in heads[category]) {
        if (key.toLowerCase() === committee) {
          return heads[category][key];
        }
      }
    }
    return null
}

// osc_data = ALL DATA
// url is -> localhost:3000/osc_crew/head/:committee
const get_head = (req, res) => {
  let { committee } = req.params;
  if (committee) {
    const head = find_head(committee)
    if (head)
      return res.status(200).send({
        status: 200,
        role: role,
        data: head,
      });
    else
      return res.status(404).send({
        status: 404,
        role: role,
        data: "Not found !",
      });
  }
};
```

## Best Practices

- **Separation of Concerns:** Each file should have a specific responsibility.
- **Error Handling:** Use middleware to handle errors properly.
- **Modular Code:** Make reusable utility functions and middlewares.
- **Consistent Naming:** Follow a clear naming convention for files and folders.

## Task

- Refactor your previous CRUD operations by following this structure.
  (Refactor means to edit and use your old code **DON'T CREATE NEW ONE** )
- Make sure to solve all issues. 
- Create **API Test** on [Thunder Cline or Postman]

### Bonus:

- Implement a middleware for error handling.
