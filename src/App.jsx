import { useState } from 'react';
import alamudi from './assets/bizayd.Jpeg';
import midroc from './assets/coin.jpeg';

import './App.css';

function App() {
  const [count, setCount] = useState(100);
  const [activeMenu, setActiveMenu] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleCopyLink = () => {
    const botLink = 'https://t.me/DubuiOne_bot';
    navigator.clipboard.writeText(botLink).then(() => {
      setCopySuccess('Bot link copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 2000); // Clear the success message after 2 seconds
    });
  };

  const handleMultiClick = () => {
    setCount((prevCount) => prevCount + 100);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen min-w-full flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-6">
        <a href="https://www.youtube.com/@haylietube" target="_blank" className="transform hover:scale-125 transition duration-300">
          <img src={alamudi} className="h-24 w-24" alt="Ali Amamudi" />
        </a>
        <a href="https://www.youtube.com/@haylietube" target="_blank" className="transform hover:scale-125 transition duration-300">
          <img src={midroc} className="h-24 w-24" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mt-6">Binzayd</h1>

      

      <div className="card mt-6 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex space-x-4 mb-4 justify-center">
          <button
            className={`p-2 ${activeMenu === 'tasks' ? 'bg-gray-600' : 'hover:bg-gray-700'} rounded`}
            onClick={() => handleMenuClick('tasks')}
          >
            Tasks
          </button>
          <button
            className={`p-2 ${activeMenu === 'mission' ? 'bg-gray-600' : 'hover:bg-gray-700'} rounded`}
            onClick={() => handleMenuClick('mission')}
          >
            Mission
          </button>
          <button
            className={`p-2 ${activeMenu === 'tab' ? 'bg-gray-600' : 'hover:bg-gray-700'} rounded`}
            onClick={() => handleMenuClick('tab')}
          >
            Tab
          </button>
          <button
            className={`p-2 ${activeMenu === 'wallet' ? 'bg-gray-600' : 'hover:bg-gray-700'} rounded`}
            onClick={() => handleMenuClick('wallet')}
          >
            Wallet
          </button>
        </div>

        {activeMenu === 'wallet' && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded shadow-lg">
              <p>Connect soon</p>
              <button
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                onClick={() => setActiveMenu(null)}
              >
                Close
                <svg class="h-8 w-8 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 11 12 14 22 4" />  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>              

              </button>
            </div>
          </div>
        )}

        {activeMenu === 'tasks' && (
          <div className="bg-gray-800 text-white p-4 rounded-lg mt-4">
            <div className="grid gap-4 mt-4">
              <button
                className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300"
                onClick={handleCopyLink}
              >
                Share the Bot
              </button>

              <a href="https://www.youtube.com/@haylietube" target="_blank" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                YouTube                
              </a>
              





              <a href="https://t.me/et_daily_vacancy" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Telegram channel
              </a>
              <a href="https://www.tiktok.com" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                TikTok
              </a>
              <a href="https://www.example.com/midroc" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Midroc
              </a>
              <a href="https://www.example.com/addis-ababa" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Addis Ababa city
              </a>
              <a href="https://www.example.com/ali-amamudi" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Ali Amamudi
              </a>
            </div>
            {copySuccess && <p className="mt-4 text-green-400">{copySuccess}</p>}
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={() => setActiveMenu(null)}
            >
              Close
            </button>
          </div>
        )}

        {activeMenu === 'tab' && (
          <div className="bg-gray-800 text-white p-4 rounded-lg mt-4 ">
            <button
        className="items-left w-48 h-48 bg-gradient-to-t from-yellow-600 to-yellow-400 text-black rounded-full border-8 border-yellow-700 shadow-2xl transform active:translate-y-2 active:shadow-none transition duration-300 flex items-center justify-center"
        onClick={handleMultiClick}
        style={{
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2), 0 15px 25px rgba(0, 0, 0, 0.3)', // Deeper shadow for 3D effect
        }}
      >
        <span className="text-3xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
          +{count}
        </span>
      </button>
          </div>
        )}

        {activeMenu === 'mission' && (
          <div className="bg-gray-800 text-white p-4 rounded-lg mt-4">
            <h2 className="text-xl font-bold">Mission</h2>
            <ul className="bg-white text-black p-4 rounded-lg">
              <li className="flex justify-between items-center mb-2">
                <span>Daily bonus</span>
                <svg class="h-8 w-8 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 11 12 14 22 4" />  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>              
                </li>
              <li className="flex justify-between items-center mb-2">
                <span>Weekly bonus</span>
                <svg class="h-8 w-8 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 11 12 14 22 4" />  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>              
                </li>
              <li className="flex justify-between items-center mb-2">
                <span>Monthly bonus</span>
                <svg class="h-8 w-8 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 11 12 14 22 4" />  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>              
                </li>
            </ul>

            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={() => setActiveMenu(null)}
            >
              Close
            </button>
            

          </div>
        )}
      </div>
    </div>
  );
}

export default App;
