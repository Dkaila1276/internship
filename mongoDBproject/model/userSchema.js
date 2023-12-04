//userSchema.js
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        user_name: { type: String },
        user_age: { type: Number },
        user_contact: { type: Number },
        user_email: { type: String, unique: true },
        user_city: { type: String },
    }
);

const Users = mongoose.model('Users', userSchema);

module.exports = Users;