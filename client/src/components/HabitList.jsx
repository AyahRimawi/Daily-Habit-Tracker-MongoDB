import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios here
import { Link } from "react-router-dom";
import HabitItem from "./HabitItem";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

const HabitList = () => {
  const [habits, setHabits] = useState([]);
  const [filteredHabits, setFilteredHabits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterTag, setFilterTag] = useState("");

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/habits");
      setHabits(response.data);
      setFilteredHabits(response.data);
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterHabits(term, filterCategory, filterTag);
  };

  const handleCategoryFilter = (category) => {
    setFilterCategory(category);
    filterHabits(searchTerm, category, filterTag);
  };

  const handleTagFilter = (tag) => {
    setFilterTag(tag);
    filterHabits(searchTerm, filterCategory, tag);
  };

  const filterHabits = (search, category, tag) => {
    let filtered = habits;
    if (search) {
      filtered = filtered.filter(
        (habit) =>
          habit.name.toLowerCase().includes(search.toLowerCase()) ||
          habit.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((habit) => habit.category === category);
    }
    if (tag) {
      filtered = filtered.filter((habit) => habit.tags.includes(tag));
    }
    setFilteredHabits(filtered);
  };

  const handleUpdate = (updatedHabit) => {
    setHabits(
      habits.map((habit) =>
        habit._id === updatedHabit._id ? updatedHabit : habit
      )
    );
    setFilteredHabits(
      filteredHabits.map((habit) =>
        habit._id === updatedHabit._id ? updatedHabit : habit
      )
    );
  };

  const handleDelete = (deletedHabitId) => {
    setHabits(habits.filter((habit) => habit._id !== deletedHabitId));
    setFilteredHabits(
      filteredHabits.filter((habit) => habit._id !== deletedHabitId)
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Daily Habit Tracker</h1>
        <Link
          to="/add"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Habit
        </Link>
      </div>
      <div className="mb-6 flex space-x-4">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown
          label="Category"
          options={["Health", "Productivity", "Mindfulness"]}
          onSelect={handleCategoryFilter}
        />
        <FilterDropdown
          label="Tag"
          options={["daily", "weekly", "monthly"]}
          onSelect={handleTagFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHabits.map((habit) => (
          <HabitItem
            key={habit._id}
            habit={habit}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default HabitList;
