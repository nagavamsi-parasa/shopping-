import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './Logout.css'; // Ensure the CSS file exists

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Ensure Firebase is initialized in your project

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login after logout
    } catch (err) {
      alert('Error logging out: ' + err.message);
    }
  };

  return (
    <div className="logout-container">
      <h2>You are logged in</h2>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
