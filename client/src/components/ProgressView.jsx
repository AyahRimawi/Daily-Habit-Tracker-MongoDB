import React from "react";

const ProgressView = () => {
  // This is a placeholder. In a real application, you would fetch habit data
  // and calculate progress statistics here.
  const habits = [
    { name: "Exercise", completed: 5, total: 7 },
    { name: "Read", completed: 3, total: 7 },
    { name: "Meditate", completed: 7, total: 7 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Habit Progress</h1>
      <div className="space-y-4">
        {habits.map((habit, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{habit.name}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(habit.completed / habit.total) * 100}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {habit.completed} / {habit.total} days completed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressView;
