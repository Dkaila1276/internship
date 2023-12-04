const Images = require('../model/imageSchema');

const addImages = async (req, res) => {
    try {
        if (!req.file || !req.body.img_title || !req.body.description || !req.body.userid) {
            return res.status(400).json({ error: 'Missing required fields in the request.' });
        }

        const user_img = req.file.filename;
        const { img_title, description, userid } = req.body;

        const result = await Images.create({ userid, user_img, img_title, description });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getImages = async (req, res) => {
    try {
        const images = await Images.find({}).populate('userid', 'username email'); // Include only necessary user information
        res.status(200).json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    addImages,
    getImages,
};
