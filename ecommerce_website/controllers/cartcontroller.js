const cartService = require('../services/cartservice');

// Controller for adding an admin
const addToCart = async (req, res) => {
    try {
        await cartService.addToCart(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all admin
const getCart = async (req, res) => {
    try {
        await cartService.getCart(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting an admin by ID
const getCartById = async (req, res) => {
    try {
        const cart = await cartService.getCartById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateCart = async (req, res) => {
    try {
        await cartService.updateCart(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteCartById = async (req, res) => {
    try {
        await cartService.deleteCartById(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
  addToCart,
  getCart,
  getCartById,
  updateCart,
  deleteCartById
};
