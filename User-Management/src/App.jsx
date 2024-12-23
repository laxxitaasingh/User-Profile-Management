import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import UsersList from './components/UserList/UsersList';
import UserEditForm from './components/UserEditForm/UserEditForm';
import './index.css';

// Redux Slice for User State Management
const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        editedUsers: JSON.parse(localStorage.getItem('editedUsers')) || {},
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        updateUser: (state, action) => {
            state.editedUsers[action.payload.id] = action.payload;
            localStorage.setItem('editedUsers', JSON.stringify(state.editedUsers));
        },
    },
});

const { setUsers, updateUser } = userSlice.actions;
const store = configureStore({ reducer: { users: userSlice.reducer } });

// Main App Component
const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<UsersList />} />
                    <Route path="/edit/:id" element={<UserEditForm />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;