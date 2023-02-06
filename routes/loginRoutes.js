const express = require("express");
const  login  = require("../controller/loginControllers");
const router_login = express.Router();
router_login.post("/login", login);
module.exports = router_login;
