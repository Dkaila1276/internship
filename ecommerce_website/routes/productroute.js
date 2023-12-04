const express = require('express');
const productController = require('../controllers/productcontroller');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/product', upload.single('product_image'),  productController.addProduct);
router.get('/product', productController.getProducts);
router.get('/product/:id', productController.getProductById);
router.get('/product1', productController.filterProducts);
router.put("/product/update", productController.updateProduct);
router.delete('/product/:id', productController.deleteProductById);

module.exports = router;