import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = ['О мероприятии', 'Форматы', 'Круглый стол', 'Лекторий'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[300px] bg-[#001420] z-50 lg:hidden shadow-[-10px_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              <nav className="flex flex-col gap-2 px-6 py-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, color: '#75C9EA' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="text-white font-['Montserrat',sans-serif] text-[16px] leading-[24px] text-left py-3 transition-colors border-b border-[rgba(117,201,234,0.1)]"
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>

              <div className="px-6 py-8 mt-auto flex flex-col gap-4">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] px-4 py-3 rounded-[8px] text-white font-['Montserrat',sans-serif] text-[14px] leading-[20px] text-center"
                >
                  Участвовать
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="relative bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] px-4 py-3 rounded-[8px] text-white font-['Montserrat',sans-serif] text-[14px] leading-[20px] text-center"
                >
                  <div className="absolute border border-[rgba(119,205,221,0.8)] inset-0 pointer-events-none rounded-[8px]" />
                  Регистрация
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
