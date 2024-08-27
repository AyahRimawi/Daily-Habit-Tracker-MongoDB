# Daily-Habit-Tracker-MongoDB
# Daily Habit Tracker

The Daily Habit Tracker is a web application designed to help users build and maintain positive habits. With features to track daily activities, set goals, and visualize progress, this application supports users in developing and sustaining new habits over time.

## Features

1. **Add New Habits**: Create new habits with details such as name, description, and completion status.
2. **Track Habit Progress**: Mark habits as completed each day and view progress over time.
3. **Habit Categories and Tags**: Organize habits using categories (e.g., health, productivity, mindfulness) and tags.
4. **Visualize Progress**: Use progress bars and other visualizations to stay motivated and track goal achievement.

## Technology Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose

## Project Structure

### Frontend

1. **HabitList**: Displays a list of all habits with filtering options.
2. **AddHabit**: Form for adding new habits.
3. **EditHabit**: Allows modification of existing habit details.
4. **HabitFilters**: Options to filter habits by category, frequency, or tag.
5. **SearchField**: Search functionality for habits.

### Backend

1. **Models**: Mongoose schemas for Habit data.
2. **Controllers**: Logic for handling requests and interacting with the database.
3. **Routes**: API endpoints for CRUD operations related to habits.
4. **Config**: Configuration files, including database connection setup.

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB Atlas Account

## Configuration

### MongoDB Configuration

The MongoDB connection string is configured in the `.env` file using the `MONGO_URI` environment variable. This connection string connects to your MongoDB Atlas cluster.