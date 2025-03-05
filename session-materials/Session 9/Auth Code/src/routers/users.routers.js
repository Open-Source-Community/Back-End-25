const express = require("express");
const router = express.Router();

const controller = require("../controller/users.controller.js");

router.get("/posts", controller.get_posts);

module.exports = router 
