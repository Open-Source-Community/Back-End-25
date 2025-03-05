const express = require("express");
const router = express.Router();

const controller = require("../controller/post.controller");

router.post("/add", controller.add_post);
router.delete("/:id",controller.remove_post)
router.put("/:id",controller.change_content)
module.exports = router 
