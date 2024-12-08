import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/userSlice';

const UserEditForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.users);
    const editedUsers = useSelector((state) => state.users.editedUsers);
    const initialUser = editedUsers[id] || users.find((user) => user.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: initialUser?.name || '',
        email: initialUser?.email || '',
        address: initialUser?.address?.street || '',
        profilePicture: initialUser?.profilePicture || null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            id: parseInt(id),
            name: formData.name,
            email: formData.email,
            address: { street: formData.address },
            profilePicture: formData.profilePicture,
        };
        dispatch(updateUser(updatedUser));
        navigate('/');
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                {formData.profilePicture && <img src={formData.profilePicture} alt="Profile" width="100" />}
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default UserEditForm;