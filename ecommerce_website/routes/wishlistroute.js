// routes/wishlistRoute.js
const express = require('express');
const wishlistController = require('../controllers/wishliscontroller');
const router = express.Router();

router.post('/wishlist', wishlistController.addToWishlist);
router.get('/wishlist',wishlistController.getWishlist)
router.get('/wishlist/:id', wishlistController.getWishlistById);
router.delete('/wishlist/:id', wishlistController.removeFromWishlist);

module.exports = router;
