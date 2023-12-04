const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
      userId : { type : mongoose.Schema.Types.ObjectId, ref: 'Users' ,require: true},
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
      quantity: { type: Number, default: 1 },
});

const Carts = mongoose.model('Carts', cartSchema);

module.exports = Carts;
