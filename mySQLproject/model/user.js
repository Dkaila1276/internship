const db = require('../config/db');

const image = db.query(`
    CREATE TABLE IF NOT EXISTS users (
      user_id INT PRIMARY KEY AUTO_INCREMENT,
      user_fname VARCHAR(255),
      user_lname varchar(255),
      user_email varchar(255),
      user_contact BIGINT,
      user_age INT,
      user_city varchar(50)
    );
  `, (err) => {
    if (err) throw err;
    console.log('User table created.');
  });


module.exports = image;