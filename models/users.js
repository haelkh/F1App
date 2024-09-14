const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    // Basic user details (for account creation and management)
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Add email (useful for login and verification)
    password: { type: String, required: true }, // Add password for authentication
  },
  {
    timestamps: true,
  }
);

// Create the user model
const User = mongoose.model("Users", usersSchema);

module.exports = User;
