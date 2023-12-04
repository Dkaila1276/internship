const adminService = require('../services/adminservice');
const tokenblack = require('../middleware/verifytokenadmin')
// Controller for adding an admin
const addAdmin = async (req, res) => {
    try {
        await adminService.addAdmin(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all admin
const getAdmins = async (req, res) => {
    try {
        await adminService.getAdmins(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting an admin by ID
const getAdminById = async (req, res) => {
    try {
        const admin = await adminService.getAdminById(req.params._id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const adminLogin = async (req, res) => {
    try {
        await adminService.verifyAdminDetails(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for admin logout (optional)

const adminLogout = async (req, res) => {
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
    addAdmin,
    getAdmins,
    getAdminById,
    adminLogin,
    adminLogout,
};
