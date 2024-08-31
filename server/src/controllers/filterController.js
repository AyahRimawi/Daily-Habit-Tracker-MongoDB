const Habit = require("../models/Habit");

exports.filterHabits = async (req, res) => {
  const { category, tags, frequency } = req.query;

  const filter = {};

  if (category) filter.category = category;
  if (tags) filter.tags = { $in: tags.split(",") };
  if (frequency) filter.frequency = frequency;

  try {
    const habits = await Habit.find(filter);
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
