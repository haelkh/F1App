const express = require("express");
const router = express.Router();
const Race = require("../models/race");

router.post("/races", async (req, res) => {
  try {
    const newRace = new Race(req.body);
    const savedRace = await newRace.save();
    res.status(201).json(savedRace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/races", async (req, res) => {
  try {
    const races = await Race.find();
    res.status(200).json(races);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/races/:id", async (req, res) => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) return res.status(404).json({ message: "Race not found" });
    res.status(200).json(race);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/races/:id", async (req, res) => {
  try {
    const updatedRace = await Race.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedRace)
      return res.status(404).json({ message: "Race not found" });
    res.status(200).json(updatedRace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/races/:id", async (req, res) => {
  try {
    const deletedRace = await Race.findByIdAndDelete(req.params.id);
    if (!deletedRace)
      return res.status(404).json({ message: "Race not found" });
    res.status(200).json({ message: "Race deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
