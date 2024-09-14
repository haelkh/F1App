const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  Location: { type: String, required: true },
  picture: { type: String, required: true },
  result: { type: Boolean, required: true },
});

const Race = mongoose.model("Race", raceSchema);

module.exports = Race;
