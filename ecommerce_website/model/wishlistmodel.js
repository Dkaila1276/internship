// models/wishlist.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Reference from the User model
    required: true,
  },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products', // Reference from the Product model
    required: true,
  },

});

const Wishlists = mongoose.model('Wishlists', wishlistSchema);

module.exports = Wishlists;
