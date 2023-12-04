// app/routes/imageRoutes.js
const express = require('express');
const imageController = require('../controller/imageController');
const upload = require('../middleware/upload');

const router = express.Router();

// Define routes related to images
router.post('/image', upload.single('user_img'),imageController.addImages);
router.get('/image', imageController.getImages);

module.exports = router;
