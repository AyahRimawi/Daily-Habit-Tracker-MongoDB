// const mongoose = require("mongoose");

// const habitSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: String,
//     category: String,
//     tags: [String],
//     frequency: {
//       type: String,
//       enum: ["daily", "weekly", "monthly"],
//       default: "daily",
//     },
//     progress: [{ date: Date, completed: Boolean }],
//     isDeleted: { type: Boolean, default: false }, // New field for soft delete
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Habit", habitSchema);

// ------------------------- عمل تعداد لل id ---------------------------
const mongoose = require("mongoose");

// Counter schema
const counterSchema = new mongoose.Schema({
  _id: String,
  seq: Number,
});

const Counter = mongoose.model("Counter", counterSchema);

// Function to get the next sequence
const getNextSequence = async (name) => {
  const counter = await Counter.findByIdAndUpdate(
    name,
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq;
};

// Habit schema
const habitSchema = new mongoose.Schema(
  {
    _id: Number,
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
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, _id: false }
);

// Pre-save hook to set custom _id
habitSchema.pre("save", async function (next) {
  if (this.isNew) {
    this._id = await getNextSequence("habitId");
  }
  next();
});

module.exports = mongoose.model("Habit", habitSchema);

