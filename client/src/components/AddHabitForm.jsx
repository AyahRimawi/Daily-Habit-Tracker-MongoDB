import React, { useState } from "react";
import { createHabit } from "./habitService"; // تأكد من المسار الصحيح

const AddHabitForm = ({ onHabitAdded }) => {
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    category: "",
    tags: "",
  });
  const [error, setError] = useState(""); // لإظهار الأخطاء للمستخدم

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHabit({
        ...habit,
        tags: habit.tags.split(",").map((tag) => tag.trim()), // تحويل العلامات إلى مصفوفة
      });
      onHabitAdded(); // استدعاء الدالة بعد إضافة العادة بنجاح
      setHabit({ name: "", description: "", category: "", tags: "" });
      setError(""); // مسح أي أخطاء سابقة
    } catch (error) {
      setError("Failed to create habit: " + error.message); // عرض رسالة الخطأ للمستخدم
    }
  };

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      {error && <p className="text-red-500">{error}</p>} {/* عرض رسالة الخطأ */}
      <input
        type="text"
        name="name"
        value={habit.name}
        onChange={handleChange}
        placeholder="Habit name"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="description"
        value={habit.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="category"
        value={habit.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="tags"
        value={habit.tags}
        onChange={handleChange}
        placeholder="Tags (comma-separated)"
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Habit
      </button>
    </form>
  );
};

export default AddHabitForm;
