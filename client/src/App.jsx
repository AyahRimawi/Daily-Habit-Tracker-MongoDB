// client/src/App.jsx
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";

function App() {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-blue-500 hover:text-blue-700">
              إضافة عادة جديدة
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HabitList />} />
        <Route
          path="/add"
          element={
            <AddHabitForm
              onHabitAdded={() => console.log("تمت إضافة عادة جديدة")}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
