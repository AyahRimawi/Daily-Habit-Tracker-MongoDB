import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Daily Habit Tracker
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/add" className="text-white hover:text-blue-200">
            Add Habit
          </Link>
          <Link to="/progress" className="text-white hover:text-blue-200">
            Progress
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
