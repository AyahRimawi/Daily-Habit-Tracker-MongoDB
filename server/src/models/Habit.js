const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String,
    tags: [String],
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly"],
      default: "daily",
    },
    progress: [{ date: Date, completed: Boolean }],
    isDeleted: { type: Boolean, default: false }, // New field for soft delete
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
