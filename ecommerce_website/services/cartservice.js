// subcategoryservice.js
const Carts = require('../model/cartmodel');

// add subcategory
const addToCart = async (req, res) => {
    try {
        const { userId , productId, quantity } = req.body;

        const result = await Carts.create({ userId ,productId, quantity });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error1' });
    }
};

// get subcategory data
const getCart = async (req, res) => {
    try {
        const result = await Carts.find({}).populate('productId').populate('userId');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get subcategory by id
const getCartById = async (_id) => {
    try {
        return await Carts.findOne({_id }).populate('productId').populate('userId');
    } catch (error) {
        throw error; 
    }
};


//update sub category
const updateCart = async (req, res) => {
    try {
        const { id ,quantity } = req.body;
        const updatedCart = await Carts.findOneAndUpdate(
            { id },
            { $set: { quantity } },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete subcategory
const deleteCartById = async (req, res) => {
    try {
        const cartId = req.params.id; // Assuming you pass the category id as a route parameter
        // Check if the category exists
        const existingCart = await Carts.findById(cartId);
        if (!existingCart) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        // If the category exists, delete it
        await Carts.findByIdAndDelete(cartId);

        res.status(200).json({ message: 'Subcategory deleted successfully' });
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
    deleteCartById,
};
