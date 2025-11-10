
import React, { useState, useEffect } from 'react';
import AppNavigation from './AppNavigation';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:5000/api/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (data.username) setUser(data.username);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (!user) {
    return <AuthPage onAuth={setUser} />;
  }
  return <AppNavigation user={user} onLogout={handleLogout} />;
}

export default App;
