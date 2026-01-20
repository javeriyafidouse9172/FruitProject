
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const [user, setUser] = useState({
    name: "Javeriya Firdouse",
    username: "user123",
    email: "javeriya@gmail.com",
    phone: "9999999999",
    avatar: "",
  });

  const handleSave = () => {
    setEditMode(false);
    alert("Profile Updated Successfully 🚀");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        {/* Avatar or initials */}
        <div className="profile-avatar-circle">
          {user.avatar ? (
            <img src={user.avatar} alt="profile" />
          ) : (
            <span>{user.name[0]}</span>
          )}
        </div>

        {!editMode ? (
          <>
            <h2>{user.name}</h2>
            <p className="sub">@{user.username}</p>

            <div className="info-list">
              <p><span>Email</span>{user.email}</p>
              <p><span>Phone</span>{user.phone}</p>
            </div>

            <button onClick={() => setEditMode(true)} className="btn">
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <h3>Edit Profile</h3>
            <div className="edit-form">
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="Full Name"
              />
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
              />
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
              <input
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                placeholder="Phone"
              />
            </div>

            <div className="btn-flex">
              <button onClick={() => setEditMode(false)} className="btn secondary">
                Cancel
              </button>
              <button onClick={handleSave} className="btn">
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
