const express = require("express");
const cookie_parser = require("cookie-parser");
const { connectDB } = require("./db/connectDB.js");

const userRouter = require("./routers/users.routers.js");
const postRouter = require("./routers/post.routers.js");
const authRouter = require("./routers/auth.router.js");

const { checkUser } = require("./middlewares/auth.middleware.js");

const app = express();

app.use(express.json());
app.use(cookie_parser());

app.use("/auth", authRouter);
app.use("*", checkUser);
app.use("/user", userRouter);
app.use("/posts", postRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});
