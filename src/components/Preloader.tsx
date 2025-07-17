import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        isDark ? 'bg-navy' : 'bg-white'
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <div className="text-6xl font-bold mb-4 animate-pulse">
            <span className="text-turquoise">Sky</span>
            <span className={isDark ? 'text-white' : 'text-navy'}>nex</span>
          </div>
          <div className="w-32 h-1 bg-turquoise rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white animate-pulse" style={{ width: '100%' }} />
          </div>
        </div>
        <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Create the Digital Difference
        </p>
      </div>
    </div>
  );
};

export default Preloader;