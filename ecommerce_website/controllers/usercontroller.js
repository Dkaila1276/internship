// userController.js
const userService = require('../services/userservice');
const tokenblack = require('../middleware/verifytokenuser')
// Controller for adding a user
const registerUser = async (req, res) => {
    try {
        await userService.registerUser(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const userLogin = async (req, res) => {
    try {
        await userService.verifyUserDetails(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all users
const getUsers = async (req, res) => {
    try {
       // await userService.authenticateToken(req, res); // Middleware for authentication
        await userService.getUsers(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting a user by ID
const getUserById = async (req, res) => {
    try {
        //await userService.authenticateToken(req, res); // Middleware for authentication
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const userLogout = async (req, res) => {
    try {
        // Get the token from the request headers
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

        // Add the token to the blacklist
        tokenblack.tokenBlacklist.add(token);

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = {
    registerUser,
    userLogin,
    getUsers,
    getUserById,
    userLogout,
};