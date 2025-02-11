const express = require("express")

const PORT = 3000
const app = express()

let users = [
    {
        id:1,
        name:"meefr s",
        age:"21"
    },
    {
        id:3,
        name:"Amr",
        age:"21"
    },{
        id:1,
        name:"Mario",
        age:"20"
    },
]
const greeting = (req,res,next)=>{
    console.log("Hello");
    next()
}
const test = (req,res,next)=>{
    console.log("test middleware");
    next()   
}
app.use(express.json())
app.use(test)
app.get('/',(req,res)=>{
    res.send("Hello World !")
})
app.get("/users", (req, res) => {
    const { name } = req.query;
    if (name) {
      const foundUsers = users.filter(user => user.name.toLowerCase() === name.toLowerCase());

      
      return res.json(foundUsers);
    }
    res.send(users);
  });
app.post("/users", (req, res) => {
    const { name,age } = req.body;
    if (!name || !age) return res.status(400).json({ msg: "Name and Age is required " });
    const newUser = { id: users.length + 1, name:name,age:age };
    users.push(newUser);
    res.status(201).json(users);
  });

  app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).send({
        status:200,data:user
    })
  });

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
