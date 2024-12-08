import { createSlice } from '@reduxjs/toolkit';

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

export const { setUsers, updateUser } = userSlice.actions;
export default userSlice.reducer;