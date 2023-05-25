const { Signup, Login } = require("../Controllers/Auth");
const { UserVerification } = require("../Helpers/Auth");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/', UserVerification)

module.exports = router;