import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../store/userSlice';

const UsersList = () => {
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.users);
    const editedUsers = useSelector((state) => state.users.editedUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(setUsers(data));
        };
        fetchUsers();
    }, [dispatch]);

    const getMergedUsers = () => {
        return users.map((user) => editedUsers[user.id] || user);
    };

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {getMergedUsers().map((user) => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;