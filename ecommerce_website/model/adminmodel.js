const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema(
  {
    admin_email: { type: String, unique: true },
    admin_password: { type: String },
  }
);


const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
