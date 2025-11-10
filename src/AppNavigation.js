import React, { useState } from 'react';


import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Transactions from './Transactions';
import Protocols from './Protocols';
import Settings from './Settings';
import AdminLogin from './AdminLogin';

const pages = [
  { name: 'Home', component: <Dashboard /> },
  { name: 'Portfolio', component: <Portfolio /> },
  { name: 'Transactions', component: <Transactions /> },
  { name: 'Protocols', component: <Protocols /> },
  // Settings will receive darkMode and onToggle as props
  { name: 'Settings', component: null },
];

export default function AppNavigation({ user, onLogout }) {
  const [activePage, setActivePage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-40 flex justify-between items-center py-4 px-8">
        <div className="flex flex-row items-center gap-4">
          <span className="text-3xl font-bold" style={{ color: '#2563eb', fontFamily: 'Bookman Old Style, Bookman, serif', fontStyle: 'italic', letterSpacing: '2px', fontWeight: 'bold', textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>CryptoVista</span>
          <img src="/Logo.png" alt="CryptoVista Logo" className="w-20 h-20" onError={e => { e.target.onerror=null; e.target.style.display='none'; e.target.parentNode.appendChild(document.createElement('span')).innerText='Logo'; }} />
        </div>
        <ul className="flex gap-8">
          {pages.map((page, idx) => (
            <li key={page.name}>
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${activePage === idx ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-800 dark:text-white'}`}
                onClick={() => setActivePage(idx)}
              >
                {page.name}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <span className="mr-4 font-semibold text-indigo-700">{user}</span>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            onClick={onLogout}
          >Logout</button>
        </div>
      </nav>
      <main className="pt-24">
        {activePage === 4 ? (
          <Settings darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} user={user} />
        ) : (
          pages[activePage].component
        )}
      </main>
    </div>
  );
}
