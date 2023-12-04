// controllers/wishlistController.js
const express = require('express');
const router = express.Router();
const wishlistService = require('../services/wishlistservice');

// Controller for adding a product to wishlist
const addToWishlist = async (req, res) => {
  try {
      await wishlistService.addtoWishlist(req, res);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getWishlist = async (req, res) => {
  try {
      await wishlistService.getWishlist(req, res);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller for getting an admin by ID
const getWishlistById = async (req, res) => {
  try {
      const wishlist = await wishlistService.getWishlistById(req.params.userid);
      if (!wishlist) {
          return res.status(404).json({ message: 'Wishlist item not found' });
      }
      res.status(200).json(wishlist);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
      await wishlistService.removeFromWishlist(req, res);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  getWishlistById,
  removeFromWishlist,
};
