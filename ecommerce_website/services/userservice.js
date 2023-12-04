// userservice.js
const Users = require('../model/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const config = require('../config/config.env')
const verifytoken = require('../middleware/verifytokenuser')


const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

const verifyToken = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    // Verify the token
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        // Attach the decoded payload to the request for further use
        req.user = decoded;
        next();
    });
};

// add User
const registerUser = async (req, res) => {
    try {
        const { user_name, user_contact, user_email, user_password } = req.body;
        const hashedPassword = await hashPassword(user_password);
        const result = await Users.create({ user_name, user_contact, user_email, user_password : hashedPassword });
        const token = jwt.sign({result},config.SECRET_TOKEN, { expiresIn: '1h' });
        res.status(200).json({message: "Register successfully",
        token,
        result,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error1' });
    }
};

//login user
const verifyUserDetails = async (req, res, next) => {
    try {
        const { user_email, user_password } = req.body
        const user = await Users.findOne({ user_email, user_password })
        if (!user) {
            res.status(401).json({ message: "Login not successful", error: "User not found" })
        } else {
            const token = jwt.sign({ user_email: user.user_email }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
            res.status(200).json({
                message: "Login successful",
                token,
                user,
            })
        }
    } catch (error) {
        res.status(400).json({ message: "An error occurred", error: error.message })
    }
}

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
    try {
        return await Users.findOne({ _id });
    } catch (error) {
        throw error; 
    }
};



module.exports = {
    registerUser,
    verifyUserDetails,
    getUsers,
    getUserById,
    verifyToken,
};
