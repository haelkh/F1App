const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  teamPrinciple: { type: String, required: true },
  points: { type: Number, required: true },
  picture: { type: String, required: true },
  WCCS: { type: Number, required: true },
  poles: { type: Number, required: true },
  fastestLaps: { type: Number, required: true },
  wins: { type: Number, required: true },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
