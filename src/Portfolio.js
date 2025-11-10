import React from 'react';

export default function Portfolio() {
  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-8 backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-2 text-indigo-700">Portfolio Overview</h2>
      <p className="font-bold text-lg mb-2">Total Value: <span className="text-pink-500">$0.00</span></p>
      <ul className="mt-2 space-y-1">
        <li className="flex justify-between"><span>ETH:</span> <span>0</span></li>
        <li className="flex justify-between"><span>USDT:</span> <span>0</span></li>
        <li className="flex justify-between"><span>DAI:</span> <span>0</span></li>
      </ul>
    </div>
  );
}
