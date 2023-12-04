// userController.js
const userService = require('../services/userservice');

// Controller for adding a user
const addUser = async (req, res) => {
    try {
        await userService.addUser(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all users
const getUsers = async (req, res) => {
    try {
        await userService.authenticateToken(req, res); // Middleware for authentication
        await userService.getUsers(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting a user by ID
const getUserById = async (req, res) => {
    try {
        await userService.authenticateToken(req, res); // Middleware for authentication
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

module.exports = {
    addUser,
    getUsers,
    getUserById,
};
