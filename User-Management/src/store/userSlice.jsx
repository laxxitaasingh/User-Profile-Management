import { createSlice } from '@reduxjs/toolkit';

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

export const { setUsers, updateUser } = userSlice.actions;
export default userSlice.reducer;