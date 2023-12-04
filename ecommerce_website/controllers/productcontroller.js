const productService = require('../services/productservice');

// Controller for adding an admin
const addProduct = async (req, res) => {
    console.log(req.body);
    try {
        await productService.addProduct(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all admin
const getProducts = async (req, res) => {
    try {
        await productService.getProducts(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting an admin by ID
const getProductById = async (req, res) => {
    try {
        const category = await productService.getProductById(req.params._id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const filterProducts = async (req, res) => {
    try {
        await productService.filterProducts(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        await productService.updateProduct(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteProductById = async (req, res) => {
    try {
        await productService.deleteProductById(req, res);
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
