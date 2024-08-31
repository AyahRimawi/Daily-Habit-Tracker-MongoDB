const Habit = require("../models/Habit");

exports.paginateHabits = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const habits = await Habit.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const total = await Habit.countDocuments();

    res.json({
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      habits,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
