const Habit = require("../models/Habit");

exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ isDeleted: false });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createHabit = async (req, res) => {
  const habit = new Habit(req.body);
  try {
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedHabit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.json(updatedHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.json({ message: "Habit soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
