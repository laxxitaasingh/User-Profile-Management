import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../store/userSlice';
import './UsersList.css';

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
        <div className="container">
            <h1 className="title">Users List</h1>
            <div className="card-grid">
                {getMergedUsers().map((user) => (
                    <div key={user.id} className="card">
                        <h2 className="card-title">{user.name}</h2>
                        <button
                            onClick={() => navigate(`/edit/${user.id}`)}
                            className="card-button"
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersList;
