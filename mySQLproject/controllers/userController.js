const db = require('../config/db');
const validator = require('validator');

const UserController = {
  getAllUsers: (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },

  getUserById: (req, res) => {
    const user_id = req.params.id;
    db.query('SELECT * FROM users WHERE user_id = ?', [user_id], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },

  createUser: (req, res) => {
    const { user_id, user_fname, user_lname, user_email, user_contact, user_age, user_city } = req.body;
    
    //validation

    if (!validator.isEmail(user_email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
  
    db.query('INSERT INTO users (user_id, user_fname, user_lname, user_email, user_contact, user_age, user_city) VALUES (?,?,?,?,?,?,?)', [user_id,user_fname, user_lname, user_email, user_contact, user_age, user_city], (err, results) => {
      if (err) throw err;
      res.json({ message: 'User created successfully'});
    });
  },

  updateUser: (req, res) => {
    const user_id = req.params.id;
    const { user_fname, user_email,user_contact } = req.body;
    db.query('UPDATE users SET user_fname = ?, user_email = ? ,user_contact =? WHERE user_id = ?', [user_fname, user_email,user_contact, user_id], (err) => {
      if (err) throw err;
      res.json({ message: 'User updated successfully' });
    });
  },

  deleteUser: (req, res) => {
    const user_id = req.params.id;
    db.query('DELETE FROM users WHERE user_id = ?', [user_id], (err) => {
      if (err) throw err;
      res.json({ message: 'User deleted successfully' });
    });
  },
};

module.exports = UserController;
