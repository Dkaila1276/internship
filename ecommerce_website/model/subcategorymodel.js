//subcategorymodel.js
const mongoose = require("mongoose");


const subcategoriesSchema = new mongoose.Schema(
    {
        subcategory_name: { type: String },
        categoryid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Categories',
          },
    }
);

const Subcategories = mongoose.model('Subcategories', subcategoriesSchema);

module.exports = Subcategories;