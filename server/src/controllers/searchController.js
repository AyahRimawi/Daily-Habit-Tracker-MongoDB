const Habit = require("../models/Habit");

exports.searchHabits = async (req, res) => {
  const { query } = req.query;

  try {
    const habits = await Habit.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
