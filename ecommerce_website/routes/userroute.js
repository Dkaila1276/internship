//user.route.js
// app/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/usercontroller');
const validation = require('../validator/uservalidator');
const verifytoken = require('../middleware/verifytokenuser')

const router = express.Router();

router.post('/user/register',validation.userValidationRules(), validation.validate,userController.registerUser);
router.post('/user/login', userController.userLogin);
router.post('/user/logout',verifytoken.verifyToken,userController.userLogout);
router.get('/user', userController.getUsers);
router.get('/user/:id',  userController.getUserById);

module.exports = router;