import React from 'react';

export default function Transactions() {
  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-8 backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-2 text-indigo-700">Transaction History</h2>
      <p className="text-gray-700">No transactions found.</p>
    </div>
  );
}
