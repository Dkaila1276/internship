const db = require('../config/db');

const image = db.query(`
    CREATE TABLE IF NOT EXISTS images (
      img_id INT PRIMARY KEY AUTO_INCREMENT,
      user_img VARCHAR(255),
      img_title varchar(255),
      img_description varchar(255),
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
  `, (err) => {
    if (err) throw err;
    console.log('Image table created.');
  });


module.exports = image;