// subcategoryservice.js
const Subcateroies = require('../model/subcategorymodel');

// add subcategory
const addSubcategory = async (req, res) => {
    try {
        const { subcategory_name, categoryid } = req.body;

        const result = await Subcateroies.create({ subcategory_name, categoryid });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error1' });
    }
};

// get subcategory data
const getSubcategory = async (req, res) => {
    try {
        const result = await Subcateroies.find({}).populate('categoryid');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get subcategory by id
const getSubcategoryById = async (_id) => {
    try {
        return await Subcateroies.findOne({ _id }).populate('categoryid');
    } catch (error) {
        throw error; 
    }
};


//update sub category
const updateSubcategory = async (req, res) => {
    try {
        const { _id, subcategory_name ,categoryid } = req.body;
        const updatedSubcategory = await Subcateroies.findOneAndUpdate(
            { _id },
            { $set: { subcategory_name } },
            { new: true }
        );
        res.status(200).json(updatedSubcategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//delete subcategory
const deleteSubcategoryById = async (req, res) => {
    try {
        const subcategoryId = req.params._id; // Assuming you pass the category id as a route parameter
        // Check if the category exists
        const existingSubcategory = await Subcateroies.findById(subcategoryId);
        if (!existingSubcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        // If the category exists, delete it
        await Subcateroies.findByIdAndDelete(subcategoryId);

        res.status(200).json({ message: 'Subcategory deleted successfully' });
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
