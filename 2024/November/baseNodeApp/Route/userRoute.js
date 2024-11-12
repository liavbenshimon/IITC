const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController.js');

// Example routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;






























