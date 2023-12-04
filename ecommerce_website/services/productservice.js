// userservice.js
const Products = require('../model/productmodel');

// add User

const addProduct = async (req, res) => {
    try {
        const product_image = req.file.filename;
        const { product_name, product_price, product_details, subcategoryid } = req.body;

        const result = await Products.create({ product_name, product_image, product_price, product_details, subcategoryid });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// get user data
const getProducts = async (req, res) => {
    try {
        const result = await Products.find({}).populate('subcategoryid');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get user by id
const getProductById = async (_id) => {
    try {
        return await Products.findOne({ _id }).populate('subcategoryid');
    } catch (error) {
        throw error; 
    }
};

const filterProducts = async (req, res) => {
    try {
        const { minPrice, maxPrice, subcategoryid } = req.query;
        let filter = {};

        // Check and add filters based on query parameters
        if (minPrice !== undefined && maxPrice !== undefined) {
            filter.product_price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
        }

        if (subcategoryid !== undefined) {
            filter.subcategoryid = subcategoryid;
        }

        const filteredProducts = await Products.find(filter).populate('subcategoryid');
        res.status(200).json(filteredProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { _id ,product_price } = req.body;
        const updatedProduct = await Products.findOneAndUpdate(
            { _id },
            { $set: { product_price } },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete category
const deleteProductById = async (req, res) => {
    try {
        const productId = req.params._id; // Assuming you pass the category id as a route parameter
        // Check if the category exists
        const existingProduct = await Products.findById(productId);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // If the category exists, delete it
        await Products.findByIdAndDelete(productId);

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    filterProducts,
    updateProduct,
    deleteProductById,
};
