import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserDetails.css';
function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
      <h1>{user.name}</h1>
      <p>Address: {user.address}</p>
      <p>Contact Number: {user.phone}</p>
    </div>
  );
}

export default UserDetails;
