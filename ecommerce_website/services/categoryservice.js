// Categorieservice.js
const Categories = require('../model/categorymodel');
const mongoose = require('mongoose')
// add Category
const addCategory = async (req, res) => {
    try {
        const { category_name } = req.body;

        const result = await Categories.create({ category_name });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error1' });
    }
};

// get category data
const getCategories = async (req, res) => {
    try {
        const result = await Categories.find({});
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get category by id
const getCategoryById = async (_id) => {
    try {
        return await Categories.findOne({ _id });
    } catch (error) {
        throw error; 
    }
};


//upadte category
const updateCategory = async (req, res) => {
    try {
        const { _id, category_name } = req.body;
        const updatedCategory = await Categories.findOneAndUpdate(
            { _id },
            { $set: { category_name } },
            { new: true }
        );
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete category
const deleteCategoryById = async (req, res) => {
    try {
        const categoryId = req.params._id; // Assuming you pass the category id as a route parameter
        // Check if the category exists
        const existingCategory = await Categories.findById(categoryId);
        if (!existingCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        // If the category exists, delete it
        await Categories.findByIdAndDelete(categoryId);

        res.status(200).json({ message: 'Category deleted successfully' });
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
