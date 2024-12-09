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
                    <div
                        key={user.id}
                        className="card"
                        onClick={() => navigate(`/edit/${user.id}`)}
                    >
                        <div className="card-data">
                            {user.profilePicture && (
                                <img
                                    className="avatar"
                                    src={user.profilePicture}
                                    alt={`${user.name}`}
                                />
                            )}
                            <div>
                                <h4 className="card-title">{user.name}</h4>
                                <p className="card-address">
                                    {user.address.street}, {user.address.city}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersList;