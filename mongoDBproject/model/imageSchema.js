const mongoose = require("mongoose");



const imageSchema = new mongoose.Schema(
    {
        user_img: { type: String },
        img_title: { type: String },
        description: { type: String },
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
          },
    }
);

const Images = mongoose.model('Images', imageSchema);

module.exports = Images;