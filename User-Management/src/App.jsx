import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import UsersList from './components/UserList/UsersList';
import UserEditForm from './components/UserEditForm/UserEditForm';

// Redux Slice for User State Management
const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        editedUsers: {},
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        updateUser: (state, action) => {
            state.editedUsers[action.payload.id] = action.payload;
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