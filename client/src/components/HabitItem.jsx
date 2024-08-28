// client/src/components/HabitItem.js
import React from "react";
import { updateHabit, deleteHabit } from "./habitService"; // تأكد من المسار الصحيح

const HabitItem = ({ habit, onUpdate }) => {
  const handleComplete = async () => {
    const updatedHabit = {
      ...habit,
      progress: [...habit.progress, { date: new Date(), completed: true }],
    };
    try {
      await updateHabit(habit._id, updatedHabit);
      onUpdate();
    } catch (error) {
      console.error("Failed to update habit:", error.message); // التعامل مع الأخطاء
    }
  };

  const handleDelete = async () => {
    try {
      await deleteHabit(habit._id);
      onUpdate();
    } catch (error) {
      console.error("Failed to delete habit:", error.message); // التعامل مع الأخطاء
    }
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded shadow">
      <div>
        <h3 className="text-lg font-semibold">{habit.name}</h3>
        <p className="text-sm text-gray-600">{habit.category}</p>
      </div>
      <div>
        <button
          onClick={handleComplete}
          className="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Complete
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
