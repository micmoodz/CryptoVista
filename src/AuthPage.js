
import { useState } from 'react';


export default function AuthPage({ onAuth }) {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const API_URL = 'http://localhost:5000/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const userLower = username.toLowerCase();
    try {
      if (mode === 'signup') {
        const res = await fetch(`${API_URL}/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: userLower, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Signup failed');
        setMode('login');
        setUsername('');
        setPassword('');
        alert('Signup successful! Please login.');
      } else {
        const res = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: userLower, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Login failed');
        localStorage.setItem('token', data.token);
        onAuth(userLower);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-indigo-200 flex flex-col">
      <div className="flex flex-row items-center justify-center mt-8 mb-4 gap-4">
  <span className="text-3xl font-bold" style={{ color: '#2563eb', textShadow: '0 2px 8px rgba(0,0,0,0.1)', fontFamily: 'Bookman Old Style, Bookman, serif', fontStyle: 'italic', letterSpacing: '2px', fontWeight: 'bold' }}>CryptoVista</span>
  <img src="/Logo.png" alt="CryptoVista Logo" className="w-28 h-28" onError={e => { e.target.onerror=null; e.target.style.display='none'; e.target.parentNode.appendChild(document.createElement('span')).innerText='Logo'; }} />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white/80 rounded-xl shadow-lg p-8 backdrop-blur-md w-80">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-sm text-gray-600">Show Password</label>
            </div>
          </div>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
          <div className="mt-4 text-center">
            {mode === 'login' ? (
              <span>Don't have an account? <button type="button" className="text-purple-600 underline" onClick={() => { setMode('signup'); setError(''); }}>Sign Up</button></span>
            ) : (
              <span>Already have an account? <button type="button" className="text-purple-600 underline" onClick={() => { setMode('login'); setError(''); }}>Login</button></span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
