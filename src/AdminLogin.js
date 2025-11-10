import React, { useState } from 'react';

export default function AdminLogin({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (onLogin) {
      const success = onLogin(userId, password);
      if (!success) {
        setError('Invalid credentials');
      } else {
        setError('');
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400">
      <form onSubmit={handleSubmit} className="bg-white/80 rounded-xl shadow-lg p-8 backdrop-blur-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">Login</button>
      </form>
    </div>
  );
}
