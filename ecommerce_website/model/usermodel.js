//usermodel.js
const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
    {
        user_name: { type: String },
        user_contact: { type: Number },
        user_email: { type: String, unique: true },
        user_password: { type: String },
    }
);


const Users = mongoose.model('Users', userSchema);

module.exports = Users;