const express = require("express");
const router = express.Router();
const Team = require("../models/team");

router.post("/teams", async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    const savedTeam = await newTeam.save();
    res.status(201).json(savedTeam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/teams", async (req, res) => {
  try {
    const teams = await Team.find().populate("drivers");
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/teams/:id", async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTeam)
      return res.status(404).json({ message: "Team not found" });
    res.status(200).json(updatedTeam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/teams/:id", async (req, res) => {
  try {
    const deletedTeam = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeam)
      return res.status(404).json({ message: "Team not found" });
    res.status(200).json({ message: "Team deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
