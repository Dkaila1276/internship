// userservice.js
const Users = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({ path: './.env' });

const secretkey = process.env.SESSION_SECRET;

// generate token
const generateToken = (_id) => {
    return jwt.sign({ _id }, secretkey, { expiresIn: '1h' });
};

// verify token
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretkey);
        return decoded._id;
    } catch (error) {
        return null; // Token is invalid or expired
    }
};

// authenticate token middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }

    const _id = verifyToken(token);

    if (!_id) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    req._id = _id;
    next();
};

// add User
const addUser = async (req, res) => {
    try {
        const { user_name, user_age, user_contact, user_email, user_city } = req.body;

        const result = await Users.create({ user_name, user_age, user_contact, user_email, user_city });

        const token = generateToken(result._id);
        res.status(201).json({ message: 'User added successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get user data
const getUsers = async (req, res) => {
    try {
        const result = await Users.find({});
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get user by id
const getUserById = async (_id) => {
    return await Users.findOne({ _id });
};

module.exports = {
    addUser,
    getUsers,
    getUserById,
    authenticateToken,
};
