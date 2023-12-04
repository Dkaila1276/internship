//Categorymodel.js
const mongoose = require("mongoose");


const categoriesSchema = new mongoose.Schema(
    {
        category_name: { type: String },
    }
);

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;