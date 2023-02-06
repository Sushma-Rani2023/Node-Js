const express = require('express');
const {
    createUsers,
    updateUser 
}= require("../controller/userController");

const authorization= require('../middleware/authorisation')
const router = express.Router();
router.post('/create',createUsers);
router.put('/update',authorization,updateUser);

module.exports = router;

