const bcrypt = require("bcrypt");
const Users = require("../modules/users.modules");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "Backend Session 9", {
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
const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
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
const signOut = async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.status(200).send({
    status: 200,
    msg: "User logged out successfully",
  });
};

module.exports = { signIn, signOut, signUp };
