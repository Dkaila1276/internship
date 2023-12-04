const express = require('express');
const userRoute = require('./userroute')
const adminRoute = require('./adminroute');
const categoryRoute = require('./categoryroute');
const subcategoryRoute = require('./subcategoryroute');
const productRoute = require('./productroute');
const wishlistRoute = require('./wishlistroute');
const cartRoute = require('./cartroute');

const router = express.Router();

// Define your main route or other common routes here

router.use('/users', userRoute);
router.use('/admins', adminRoute);
router.use('/categories',categoryRoute);
router.use('/subcategories',subcategoryRoute);
router.use('/products',productRoute);
router.use('/wishlists',wishlistRoute);
router.use('/carts',cartRoute);

module.exports = router;
