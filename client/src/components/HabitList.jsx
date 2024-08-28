import React, { useState, useEffect } from "react";
import HabitItem from "./HabitItem";
import { getAllHabits } from "./habitService";

const HabitList = () => {
  const [habits, setHabits] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const data = await getAllHabits();
      setHabits(data);
    } catch (error) {
      console.error("Failed to fetch habits:", error.message);
    }
  };

  const filteredHabits = habits.filter(
    (habit) =>
      habit.name.toLowerCase().includes(filter.toLowerCase()) ||
      habit.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Search habits..."
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredHabits.map((habit) => (
        <HabitItem key={habit._id} habit={habit} onUpdate={fetchHabits} />
      ))}
    </div>
  );
};

export default HabitList;
