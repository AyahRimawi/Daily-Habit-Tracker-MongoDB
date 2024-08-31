import React, { useState } from "react";
import axios from "axios"; // Import axios here

const HabitItem = ({ habit, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHabit, setEditedHabit] = useState(habit);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/habits/${habit._id}`,
        editedHabit,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const updatedHabit = response.data;
      onUpdate(updatedHabit);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating habit:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/habits/${habit._id}`);
      onDelete(habit._id);
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedHabit((prev) => ({ ...prev, [name]: value }));
  };

  if (isEditing) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          name="name"
          value={editedHabit.name}
          onChange={handleChange}
          className="text-xl font-semibold mb-2 w-full"
        />
        <textarea
          name="description"
          value={editedHabit.description}
          onChange={handleChange}
          className="text-gray-600 mb-4 w-full"
        />
        <input
          type="text"
          name="category"
          value={editedHabit.category}
          onChange={handleChange}
          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
        />
        <div className="mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{habit.name}</h2>
      <p className="text-gray-600 mb-4">{habit.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {habit.category}
        </span>
        <div>
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-600 mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitItem;
