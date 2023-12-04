const categoryService = require('../services/categoryservice');

// Controller for adding an admin
const addCategory = async (req, res) => {
    try {
        await categoryService.addCategory(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all admin
const getCategories = async (req, res) => {
    try {
        await categoryService.getCategories(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting an admin by ID
const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params._id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateCategory = async (req, res) => {
    try {
        await categoryService.updateCategory(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteCategoryById = async (req, res) => {
    try {
        await categoryService.deleteCategoryById(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
   addCategory,
   getCategories,
   getCategoryById,
   updateCategory,
   deleteCategoryById,
};
