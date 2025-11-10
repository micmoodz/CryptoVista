import WalletConnect from './WalletConnect';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 dark:bg-gradient-to-br dark:from-[#181824] dark:via-[#23243a] dark:to-[#23243a]">
      {/* Decorative blurred circles for both modes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 dark:bg-[#23243a] rounded-full opacity-30 blur-2xl animate-pulse" style={{zIndex:0}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 dark:bg-[#181824] rounded-full opacity-30 blur-2xl animate-pulse" style={{zIndex:0}}></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-300 dark:bg-[#23243a] rounded-full opacity-20 blur-2xl animate-pulse" style={{zIndex:0, transform:'translate(-50%,-50%)'}}></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg tracking-wide">DeFi Dashboard Lite</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WalletConnect />
          <div className="bg-white/80 dark:bg-[#23243a]/80 rounded-xl shadow-lg p-8 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-[#a5b4fc]">Portfolio Overview</h2>
            <p className="font-bold text-lg mb-2">Total Value: <span className="text-pink-500 dark:text-[#f472b6]">$0.00</span></p>
            <ul className="mt-2 space-y-1">
              <li className="flex justify-between"><span>ETH:</span> <span>0</span></li>
              <li className="flex justify-between"><span>USDT:</span> <span>0</span></li>
              <li className="flex justify-between"><span>DAI:</span> <span>0</span></li>
            </ul>
          </div>
          <div className="bg-white/80 dark:bg-[#23243a]/80 rounded-xl shadow-lg p-8 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-[#a5b4fc]">DeFi Protocols</h2>
            <p className="text-gray-700 dark:text-[#c4b5fd]">Coming soon: <span className="font-semibold text-purple-500 dark:text-[#c4b5fd]">Aave, Uniswap, Compound...</span></p>
          </div>
          <div className="bg-white/80 dark:bg-[#23243a]/80 rounded-xl shadow-lg p-8 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-[#a5b4fc]">Transaction History</h2>
            <p className="text-gray-700 dark:text-[#e0e7ef]">No transactions found.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
