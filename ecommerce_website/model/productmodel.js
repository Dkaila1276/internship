//product.model.js
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        product_name: { type: String  ,require : true},
        product_price: { type: Number ,require : true },
        product_image: { type: String ,require : true },
        product_details : { type : String , require : true},
        subcategoryid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subcategories',
            require : true,
        },
    }
);

const Products = mongoose.model('Products', productSchema);

module.exports = Products;