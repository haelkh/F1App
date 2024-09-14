const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wins: { type: Number, required: true },
  picture: { type: String, required: true },
  points: { type: Number, default: 0 },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team"},
  country: { type: String, required: true },
  podiums: { type: Number, required: true },
  Grand_Prix_entered: { type: Number, required: true },
  World_championships: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true },
  placeOfBirth: { type: String, required: true },
  biography: { type: String }, // Add biography
  fastestLaps: { type: Number, required: true },
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
