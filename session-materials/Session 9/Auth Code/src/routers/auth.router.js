const {Router} = require("express")
const router = Router()
const controller = require("../controller/auth.controller")

router.post("/signup", controller.signUp);
router.post("/signin", controller.signIn);
router.get("/signout", controller.signOut);

module.exports = router