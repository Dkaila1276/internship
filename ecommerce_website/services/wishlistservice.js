// services/wishlistService.js
const Wishlist = require('../model/wishlistmodel');

// Add Product to Wishlist
const addtoWishlist = async (req, res) => {
  try {
      const { userid, productid } = req.body;

      const result = await Wishlist.create({ userid, productid });
      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getWishlist = async (req, res) => {
  try {
      const result = await Wishlist.find({}).populate('productid').populate('userid');
      res.status(200).json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

// get subcategory by id
const getWishlistById = async (_id) => {
  try {
    return await Wishlist.findOne({ _id }).populate('productid').populate('userid');
} catch (error) {
    throw error; 
}
};

//delete subcategory
const removeFromWishlist = async (req, res) => {
  try {
      const wishlistId = req.params.id; 
      const existingWishlist = await Wishlist.findById(wishlistId);
      if (!existingWishlist) {
          return res.status(404).json({ message: 'Wishlist Item not found1' });
      }
      // If the category exists, delete it
      await Wishlist.findByIdAndDelete(wishlistId);

      res.status(200).json({ message: 'Wishlist Item Remove successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = { 
  addtoWishlist,
  getWishlist,
  getWishlistById,
  removeFromWishlist,
};
