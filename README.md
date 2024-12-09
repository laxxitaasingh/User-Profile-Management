# User Profile Dashboard

## Objective
Build a simple user profile dashboard that allows users to view and update their profile details.

---

## Features

### 1. **Users List Page**
- Displays a list of users.
- Fetches initial user data from the mock API ([jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)).
- Clickable user entries to navigate to the profile update form.

### 2. **Profile Update Page**
- A form to update the user's:
  - Name
  - Email
  - Address
- Includes validation for all fields.
- On successful form submission:
  - Updates the user data in the state.
  - Redirects back to the Users List Page.

### 3. **State Management**
- Utilizes state management tools (e.g., Redux Toolkit or `useState`) to:
  - Manage the fetched users.
  - Store and retrieve edited user data.

### 4. **Show Edited Users**
- Displays both:
  - Original users from the API.
  - Edited user details.

### 5. **Optional Bonus Feature**
- Allows uploading and displaying a profile picture.
- Uses local state for storing the image.

---

## Technologies Used
- **React** for building the UI components.
- **React Router** for navigation between pages.
- **Redux Toolkit** (or `useState`) for state management.
- **CSS** for styling components.

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Folder Structure
```
├── src
│   ├── components
│   │   ├── UsersList.jsx        // Component for displaying the list of users
│   │   ├── UserEditForm.jsx     // Component for editing user details
│   ├── store
│   │   ├── userSlice.js         // Redux slice for user state management
│   ├── App.js                   // Main application component
│   ├── index.js                 // Entry point for React app
│   └── styles
│       ├── UsersList.css        // Styles for Users List page
│       ├── UserEditForm.css     // Styles for User Edit Form page
```

---

## Validation Rules
- **Name:** Must not be empty.
- **Email:** Must follow a valid email format.
- **Address:** Must not be empty.

---

## Future Enhancements
- Add pagination to the users list.
- Implement a backend API to persist changes.
- Add unit tests for components and Redux slices.
- Improve UI responsiveness for different screen sizes.

---

## Contribution Guidelines
- Fork the repository.
- Create a new feature branch.
- Submit a pull request with a detailed description of changes.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author
Laxita Singh


