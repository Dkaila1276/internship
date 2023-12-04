//userRoute.js
// app/routes/userRoutes.js
const express = require('express');
const userController = require('../controller/userController');
const userService = require('../services/userservice');
const validation = require('../validator/uservalidator');
const authenticateToken = userService.authenticateToken;

const router = express.Router();

router.post('/user', validation.userValidationRules(), validation.validate, userController.addUser);
router.get('/user', authenticateToken, userController.getUsers);
router.get('/user/:_id', authenticateToken, userController.getUserById);

module.exports = router;