const express = require('express');
const categoryController = require('../controllers/categorycontroller');

const router = express.Router();

router.post('/category', categoryController.addCategory);
router.get('/category', categoryController.getCategories);
router.get('/category/:id', categoryController.getCategoryById);
router.put("/category/update", categoryController.updateCategory);
router.delete('/category/:id', categoryController.deleteCategoryById);
module.exports = router;