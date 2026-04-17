import { motion } from 'motion/react';
import { useState } from 'react';
import svgPaths from "../../imports/svg-iev34aw50n";
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-[156px] py-6 md:py-[75px] bg-gradient-to-b from-[rgba(0,12,20,0.9)] to-transparent backdrop-blur-sm"
      >
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="h-[32px] md:h-[42px] w-[115px] md:w-[153px] shrink-0"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.281 42">
              <g>
                <path d={svgPaths.p37aeb80} fill="white" />
                <path d={svgPaths.p38024200} fill="white" />
                <path d={svgPaths.p2d27cf00} fill="white" />
                <path d={svgPaths.p3691d000} fill="white" />
                <path d={svgPaths.p23f2fd80} fill="white" />
                <path d={svgPaths.pc4c8600} fill="white" />
                <path d={svgPaths.p217ecf00} fill="white" />
                <path d={svgPaths.p10c2e900} fill="white" />
                <path d={svgPaths.p9aae100} fill="white" />
                <path d={svgPaths.p233dca00} fill="white" />
                <path d={svgPaths.p23d34d00} fill="white" />
                <path d={svgPaths.pd80c300} fill="white" />
                <path d={svgPaths.p2e296a00} fill="white" />
                <path d={svgPaths.p16aa5f00} fill="white" />
                <path d={svgPaths.p16478600} fill="white" />
                <path d={svgPaths.p1f801600} fill="white" />
                <path d={svgPaths.p312a4e00} fill="white" />
                <path d={svgPaths.p38212ac0} fill="white" />
                <path d={svgPaths.p5548dc0} fill="white" />
                <path d={svgPaths.p168c2000} fill="white" />
                <path d={svgPaths.p1aa0ac70} fill="white" />
                <path d={svgPaths.p89fb140} fill="white" />
                <path d={svgPaths.p21a81100} fill="white" />
              </g>
            </svg>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6 font-['Montserrat',sans-serif] font-normal text-[16px] text-white">
            {['О мероприятии', 'Форматы', 'Круглый стол', 'Лекторий'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                whileHover={{ scale: 1.05, color: '#75C9EA' }}
                className="transition-colors leading-[24px]"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white relative z-[60]"
            aria-label="Open menu"
          >
            <motion.svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </motion.svg>
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
