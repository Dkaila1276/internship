const express = require('express');
const adminController = require('../controllers/admincontroller');
const validation = require('../validator/adminvalidator');
const verifyToken = require('../middleware/verifytokenadmin')

const router = express.Router();

router.post('/admin',validation.adminValidationRules(),validation.validate, adminController.addAdmin);
router.post("/admin/login", adminController.adminLogin);
router.post("/admin/logout",verifyToken.verifyToken, adminController.adminLogout);
router.get('/admin', adminController.getAdmins);
router.get('/admin/:id', adminController.getAdminById);

module.exports = router;