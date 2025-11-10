
import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function WalletConnect() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');

  async function connectWallet() {
    setError('');
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        // Fetch ETH balance
        const bal = await provider.getBalance(accounts[0]);
        setBalance(ethers.formatEther(bal));
      } catch (err) {
        setError('Wallet connection failed.');
      }
    } else {
      setError('MetaMask not detected.');
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">Wallet Connection</h2>
      {account ? (
        <div>
          <p className="text-green-600">Connected: {account}</p>
          <p className="text-indigo-600">ETH Balance: {balance !== null ? `${balance} ETH` : 'Loading...'}</p>
        </div>
      ) : (
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={connectWallet}>
          Connect MetaMask
        </button>
      )}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
