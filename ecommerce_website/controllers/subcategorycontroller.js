const subcategoryService = require('../services/subcategoryservice');

// Controller for adding an admin
const addSubcategory = async (req, res) => {
    try {
        await subcategoryService.addSubcategory(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting all admin
const getSubcategory = async (req, res) => {
    try {
        await subcategoryService.getSubcategory(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller for getting an admin by ID
const getSubcategoryById = async (req, res) => {
    try {
        const subcategory = await subcategoryService.getSubcategoryById(req.params._id);
        if (!subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        res.status(200).json(subcategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateSubcategory = async (req, res) => {
    try {
        await subcategoryService.updateSubcategory(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteSubcategoryById = async (req, res) => {
    try {
        await subcategoryService.deleteSubcategoryById(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
  addSubcategory,
  getSubcategory,
  getSubcategoryById,
  updateSubcategory,
  deleteSubcategoryById,
};
