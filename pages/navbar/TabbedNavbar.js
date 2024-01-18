// components/TabbedNavbar.js
import { useState } from 'react';
import Link from 'next/link';

const TabbedNavbar = () => {
  const [activeTab, setActiveTab] = useState('home'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li className={`cursor-pointer ${activeTab === 'home' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('home')}>
            <Link href="/home">
              <p className={`text-gray-700 ${activeTab === 'home' ? 'font-semibold' : ''}`}>Home</p>
            </Link>
          </li>
          <li className={`cursor-pointer ${activeTab === 'about' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('about')}>
            <Link href="/about">
              <p className={`text-gray-700 ${activeTab === 'about' ? 'font-semibold' : ''}`}>About</p>
            </Link>
          </li>
          <li className={`cursor-pointer ${activeTab === 'contact' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabClick('contact')}>
            <Link href="/contact">
              <p className={`text-gray-700 ${activeTab === 'contact' ? 'font-semibold' : ''}`}>Contact</p>
            </Link>
          </li>
          {/* Add more tabs as needed */}
        </ul>
      </div>
    </div>
  );
};

export default TabbedNavbar;
