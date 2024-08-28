const express = require("express");
const router = express.Router();
const habitController = require("../controllers/habitController");

router.get("/", habitController.getAllHabits);
router.post("/", habitController.createHabit);
router.put("/:id", habitController.updateHabit);
router.delete("/:id", habitController.deleteHabit);

module.exports = router;

// postman::

// ------------
// GET:
// http://localhost:6000/api/habits
// ------------

// ------------
// POST:
// http://localhost:6000/api/habits
// {
//   "name": "Exercise",
//   "description": "Daily workout",
//   "category": "Health",
//   "tags": ["fitness", "daily"],
//   "frequency": "daily",
//   "progress": [
//     {"date": "2024-08-28T00:00:00.000Z", "completed": true}
//  ]
// }
// ------------

// ------------
// PUT:
// http://localhost:6000/api/habits/{id}
// {
//   "description": "Updated daily workout",
//   "category": "Fitness"
// }
// ------------

// ------------
// DELETE:
// http://localhost:6000/api/habits/{id}

// ------------
