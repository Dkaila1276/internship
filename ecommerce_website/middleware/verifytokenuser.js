// authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config.env')

// In-memory token blacklist
const tokenBlacklist = new Set();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized', error: 'Token not provided' });
    }

    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ message: 'Unauthorized', error: 'Token revoked' });
    }

    jwt.verify(token, config.SECRET_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized', error: 'Invalid token' });
        }

        // Attach the decoded data to the request object for later use
        req.userData = decoded;
        next();
    });
};

module.exports = {
    verifyToken,
    tokenBlacklist, 
};
