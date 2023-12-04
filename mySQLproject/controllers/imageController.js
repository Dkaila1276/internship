const db = require('../config/db');
const validator = require('validator');

const ImageController = {
    getAllImages: (req, res) => {
      db.query('SELECT * FROM images', (err, results) => {
        if (err) throw err;
        res.json(results);
      });
    },
  
    getImageById: (req, res) => {
      const img_id = req.params.id;
      db.query('SELECT * FROM images WHERE img_id = ?', [img_id], (err, results) => {
        if (err) throw err;
        res.json(results);
      });
    },
  
    createImage: (req, res) => {
        const { img_id, img_title, img_description, user_id } = req.body;
        const user_img = req.file;
        const fileName = user_img.originalname;
          // Insert the image details into the database
          db.query(
            'INSERT INTO images (img_id, user_img, img_title, img_description, user_id) VALUES (?, ?, ?, ?, ?)',
            [img_id,fileName, img_title, img_description, user_id],
            (err, results) => {
              if (err) throw err;
              res.json({ message: 'Image created successfully' });
            }
          );
   
      },
  
    updateImage: (req, res) => {
      const img_id = req.params.id;
      const { img_title } = req.body;
      const user_img = req.file;
        const fileName = user_img.originalname;
      db.query('UPDATE images SET user_img = ?, img_title = ? WHERE img_id = ?', [fileName,img_title,img_id], (err) => {
        if (err) throw err;
        res.json({ message: 'User updated successfully' });
      });
    },
  
    deleteImage: (req, res) => {
      const img_id = req.params.id;
      db.query('DELETE FROM images WHERE img_id = ?', [img_id], (err) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully' });
      });
    },
  };

  module.exports = ImageController;