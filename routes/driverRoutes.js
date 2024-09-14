const express = require("express");
const router = express.Router();
const Driver = require("../models/driver");

router.post("/drivers", async (req, res) => {
  try {
    const newDriver = new Driver(req.body);
    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/drivers", async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/drivers/:id", async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ message: "Driver not found" });
    res.status(200).json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/drivers/:id", async (req, res) => {
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDriver)
      return res.status(404).json({ message: "Driver not found" });
    res.status(200).json(updatedDriver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/drivers/:id", async (req, res) => {
  try {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
    if (!deletedDriver)
      return res.status(404).json({ message: "Driver not found" });
    res.status(200).json({ message: "Driver deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
