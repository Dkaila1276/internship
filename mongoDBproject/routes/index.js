const express = require('express');
const userRoute = require('./userRoute')
const imageRoute = require('./imageRoute');

const router = express.Router();

// Define your main route or other common routes here

router.use('/users', userRoute);
// Include image-related routes
router.use('/images', imageRoute);

module.exports = router;
