const express = require('express');
const subcategoryController = require('../controllers/subcategorycontroller');

const router = express.Router();

router.post('/subcategory', subcategoryController.addSubcategory);
router.get('/subcategory', subcategoryController.getSubcategory);
router.get('/subcategory/:id', subcategoryController.getSubcategoryById);
router.put("/subcategory/update", subcategoryController.updateSubcategory);
router.delete('/subcategory/:id', subcategoryController.deleteSubcategoryById);
module.exports = router;