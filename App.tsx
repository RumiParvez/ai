import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { Marketing } from './pages/Marketing';
import { Subscriptions } from './pages/Subscriptions';
import { Create } from './pages/Create';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Support } from './pages/Support';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <HashRouter>
      <div className="min-h-screen w-full relative transition-colors duration-500 bg-gray-50 dark:bg-[#050508]">
        
        {/* Main Content Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        {/* Floating Navigation Dock */}
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
      </div>
    </HashRouter>
  );
};

export default App;