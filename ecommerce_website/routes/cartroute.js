const express = require('express');
const cartController = require('../controllers/cartcontroller');

const router = express.Router();

router.post('/cart', cartController.addToCart);
router.get('/cart', cartController.getCart);
router.get('/cart/:id',cartController.getCartById);
router.put("/cart/update", cartController.updateCart);
router.delete('/cart/:id', cartController.deleteCartById);
module.exports = router;