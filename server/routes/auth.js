const express = require("express"); //include express in this app
const { register, login, createConnectAccount } = require("../controllers/auth")
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/create-connect-account", createConnectAccount);

module.exports = router;

