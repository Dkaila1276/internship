const Admin = require('../model/adminmodel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require('dotenv').config({path:'./.env'});
const verifytoken = require('../middleware/verifytokenadmin')


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
        req.admin = decoded;
        next();
    });
};


// add Admin
const addAdmin = async (req, res) => {
    try {
        const { admin_email, admin_password } = req.body;
        const hashedPassword = await hashPassword(admin_password);
        const result = await Admin.create({ admin_email, admin_password : hashedPassword });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get Admin data
const getAdmins = async (req, res) => {
    try {
        const result = await Admin.find({});
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get Admin by id
const getAdminById = async (_id) => {
    try {
        return await Admin.findOne({ _id });
    } catch (error) {
        throw error; 
    }
};

const verifyAdminDetails = async (req, res, next) => {
    try {
        const { admin_email, admin_password } = req.body
        const admin = await Admin.findOne({ admin_email, admin_password })
        if (!admin) {
            res.status(401).json({ message: "Login not successful", error: "Admin not found" })
        } else {
            const token = jwt.sign({ admin_email: admin.admin_email }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
            res.status(200).json({
                message: "Login successful",
                token,
                admin,
            })
        }
    } catch (error) {
        res.status(400).json({ message: "An error occurred", error: error.message })
    }
}
  

module.exports = {
    addAdmin,
    getAdmins,
    getAdminById,
    verifyAdminDetails,
    verifyToken,
};
