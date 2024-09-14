const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/f1DataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Importing the route handlers
const driverRoutes = require("./routes/driverRoutes");
const teamRoutes = require("./routes/teamRoutes");
const raceRoutes = require("./routes/raceRoutes");
const userRoutes = require("./routes/userRoutes"); // Import user routes

// Using the route handlers with specific base paths
app.use("/api/drivers", driverRoutes); // For driver-related routes
app.use("/api/teams", teamRoutes); // For team-related routes
app.use("/api/races", raceRoutes); // For race-related routes
app.use("/api/users", userRoutes); // For user-related routes

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
