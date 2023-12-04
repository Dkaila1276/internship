const imageService = require('../services/imageService'); // Assuming your service file is named imageService.js

const addImages = async (req, res) => {
    try {
        await imageService.addImages(req, res);
    } catch (error) {
        console.error('Controller - Error handling image upload:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getImages = async (req, res) => {
    try {
        await imageService.getImages(req, res);
    } catch (error) {
        console.error('Controller - Error handling image fetch:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    addImages,
    getImages,
};
