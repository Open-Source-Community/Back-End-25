# Express CRUD API

## Agenda

1. [**What is CRUD Operation?**](#What-is-CRUD-Operation?)
2. [**Add our test data**](#Add-Our-Test-Data)
3. [**What is Middleware?**](#What-is-Middleware?)
4. [**Get all users**](#Get-All-Users)
5. [**Request Queries**](#Request-Queries)
6. [**Request Parameters**](#Request-Parameters)
7. [**Add users**](#Add-Users)
8. [**Request Body**](#Request-Body)
9. [**Delete user by ID**](#Delete-User-by-ID)

---

## 1. What is CRUD Operation?

CRUD stands for **Create, Read, Update, Delete**. These are the four basic operations that can be performed on a database:

- **Create**: Adding new data
- **Read**: Retrieving data
- **Update**: Modifying existing data
- **Delete**: Removing data

In this Express API, we implement CRUD operations using RESTful endpoints.

## 2. Add Our Test Data

For demonstration, we use a simple in-memory array:

```js
const users = [
  { id: 1, name: "Meefr" },
  { id: 2, name: "Amr" },
  { id: 3, name: "Mohamed" },
];
```

This allows us to perform operations on the `users` array.

## 3. What is Middleware?

Middleware functions in Express.js are functions that execute during the request-response cycle. Common middleware includes:

- `express.json()` to parse JSON request bodies

## 4. Get All Users

To retrieve all users:

```js
app.get("/", (req, res) => {
  res.status(200).json({ data: users });
});
```

This returns a JSON object with all users.

## 5. Request Queries

Query parameters allow filtering data. Example:

```js
app.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    const foundUsers = users.filter(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    return res.json(foundUsers);
  }
  res.json(users);
});
```

Access it via: `GET /?name=Amr`

## 6. Request Parameters

Path parameters allow retrieving specific users by ID:

```js
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
});
```

Access it via: `GET /2`

## 7. Add Users

To create a new user:

```js
app.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ msg: "Name is required" });
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});
```

Send a `POST` request with JSON data `{ "name": "NewUser" }`

## 8. Request Body

The request body contains data sent by the client. Express parses it using `express.json()`. Example:

```js
app.use(express.json());
app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return res.status(404).json({ msg: "User not found" });
  users[index] = { id, ...req.body };
  res.json(users[index]);
});
```

## 9. Delete User by ID

To delete a user:

```js
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return res.status(404).json({ msg: "User not found" });
  users.splice(index, 1);
  res.json({ msg: "User deleted successfully" });
});
```

Access it via: `DELETE /2`

---

## Running the API

1. Install dependencies:
   ```sh
   npm install express cors morgan
   ```
2. Start the server:
   ```sh
   node server.js
   ```
3. API runs on `http://localhost:3000/`

## Task

  Check this file -> [Task](./TaskFiles/Task.md) 


## References

1. [HTTP Methods in Express NodeJS](https://www.geeksforgeeks.org/express-js-http-methods/)
2. [Express NodeJS Routing](https://expressjs.com/en/guide/routing.html)
3. Code for reading OSC-Crew file

    ```js
    const fs = require("fs");
    const path = '' // write path here
    const data = fs.readFileSync(path, "utf8", (e, data) => {
      if (e) console.error(e);
      else return data;
    });
    let sData = JSON.parse(data);
    ```

### Optional - Extra

1. [CRUD Operations - With DataBase (MongoDB)](https://www.geeksforgeeks.org/node-js-crud-operations-using-mongoose-and-mongodb-atlas/)
