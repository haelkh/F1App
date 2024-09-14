const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middlewares/authenticateToken"); // Import the middleware

// Public routes
router.post("/signup", userController.signup); // Signup (Register)
router.post("/login", userController.login); // Login

// Protected routes (require authentication)
router.get("/", authenticateToken, userController.getAllUsers); // Get all users (protected)
router.get("/:id", authenticateToken, userController.getUserById); // Get a user by ID (protected)
router.put("/:id", authenticateToken, userController.updateUser); // Update a user by ID (protected)
router.delete("/:id", authenticateToken, userController.deleteUser); // Delete a user by ID (protected)

module.exports = router;
