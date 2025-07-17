import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursor);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
          isDark ? 'border-turquoise' : 'border-navy'
        } ${isHovering ? 'bg-turquoise' : 'bg-transparent'}`}
      />
    </div>
  );
};

export default CustomCursor;