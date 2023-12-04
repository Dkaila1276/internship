const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const upload = require('../middleware/upload')

router.get('/image', imageController.getAllImages);
router.get('/image/:id', imageController.getImageById);
router.post('/image',upload.single('user_img'), imageController.createImage);
router.put('/image/:id',upload.single('user_img'), imageController.updateImage);
router.delete('/image/:id', imageController.deleteImage);

module.exports = router;