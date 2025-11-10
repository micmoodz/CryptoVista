import React, { useState } from 'react';

export default function ThemeToggle({ onToggle, darkMode }) {
  return (
    <button
      className={`fixed top-6 right-6 z-50 px-4 py-2 rounded-full shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      onClick={onToggle}
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? '🌗 Light Mode' : '🌑 Dark Mode'}
    </button>
  );
}
