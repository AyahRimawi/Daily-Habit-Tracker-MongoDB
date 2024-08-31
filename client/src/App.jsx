import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HabitList from "./components/HabitList";
import AddHabitModal from "./components/AddHabitModal";
import ProgressView from "./components/ProgressView";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HabitList />} />
          <Route path="/add" element={<AddHabitModal />} />
          <Route path="/progress" element={<ProgressView />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
