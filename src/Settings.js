

import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Settings({ darkMode, onToggle }) {
  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-8 backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-2 text-indigo-700">Settings</h2>
      <p className="text-gray-700 mb-4">Customize your dashboard settings here.</p>
      <div className="mb-6">
        <ThemeToggle darkMode={darkMode} onToggle={onToggle} />
      </div>
    </div>
  );
}
