# Admin Panel with User Management and Analytics

## Overview

This project is an Admin Panel built with React and Chakra UI, featuring user management capabilities and analytics visualization. It provides a responsive interface for performing CRUD (Create, Read, Update, Delete) operations on user data and displays user registration trends.

## Features

- User Management
  - View list of users
  - Search and filter users
  - Add new users
  - Edit existing user information
  - Delete users
- Analytics Dashboard
  - Display user registration metrics
  - Visualize user registration trends

## Technologies Used

- React.js
- Chakra UI for component styling
- React Router v6 for navigation
- Axios for API calls
- Recharts for data visualization
- JSON Server (for simulating a backend API)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (usually comes with Node.js)

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-username/admin-panel.git
   cd admin-panel
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up JSON Server:
   - Install JSON Server globally if you haven't already:
     ```
     npm install -g json-server
     ```
   - Start JSON Server (assuming your `db.json` is in the project root):
     ```
     json-server --watch db.json --port 3000
     ```

4. Start the React application:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the admin panel.

## Project Structure

- `src/App.js`: Main application component and routing setup
- `src/components/`:
  - `Navbar.js`: Navigation bar component
  - `UserList.js`: Displays list of users and handles search/filter
  - `UserForm.js`: Form for creating and editing users
  - `Analytics.js`: Displays analytics and charts

## API Endpoints

The project uses the following API endpoints (simulated by JSON Server):

- `GET /users`: Fetch all users
- `GET /users/:id`: Fetch a single user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update an existing user
- `DELETE /users/:id`: Delete a user

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
