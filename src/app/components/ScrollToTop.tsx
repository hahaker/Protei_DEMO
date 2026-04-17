import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 md:right-8 z-50 bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] p-3 md:p-4 rounded-full shadow-[0_4px_20px_rgba(119,205,221,0.4)] hover:shadow-[0_6px_30px_rgba(119,205,221,0.6)] transition-shadow"
      aria-label="Scroll to top"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </motion.button>
  );
}
