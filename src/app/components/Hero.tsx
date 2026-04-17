import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative px-4 md:px-8 lg:px-[156px] pt-32 md:pt-48 lg:pt-[308px] pb-20 md:pb-32">
      <div className="max-w-[840px] mx-auto lg:mx-0">
        {/* Event Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-3 md:gap-6 items-center mb-6 md:mb-8 font-['Montserrat',sans-serif] text-white"
        >
          <p className="text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] whitespace-nowrap">«Связь-2026»</p>
          <div className="h-[20px] md:h-[24px] w-px">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 24">
              <path d="M0.5 0V24" stroke="#75C9EA" />
            </svg>
          </div>
          <p className="text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] whitespace-nowrap">9–11 апреля</p>
          <div className="h-[20px] md:h-[24px] w-px">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 24">
              <path d="M0.5 0V24" stroke="#75C9EA" />
            </svg>
          </div>
          <p className="text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] whitespace-nowrap">Зал «Немчинов»</p>
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-['Montserrat',sans-serif] font-bold text-white mb-6 md:mb-8"
        >
          <motion.h1 
            className="text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] tracking-[-0.36px] md:tracking-[-0.56px] mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Импортозамещение
          </motion.h1>
          <motion.h1 
            className="text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] tracking-[-0.36px] md:tracking-[-0.56px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span>или </span>
            <span className="bg-clip-text bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] text-transparent">
              локализация
            </span>
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col gap-2 mb-8 md:mb-10 text-white font-['Montserrat',sans-serif]"
        >
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold">
            Стратегия повышения контролируемости и управляемости
            <br className="hidden md:block" />
            ИТ-решений для государства и КИИ — какой путь выбрать?
          </p>
          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
            Закрытая дискуссия и практический лекторий для ИТ и телекоммуникационной отраслей
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 font-['Montserrat',sans-serif]"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] px-6 md:px-[24px] py-3 md:py-[12px] rounded-[8px] text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] transition-all hover:shadow-[0_0_30px_rgba(119,205,221,0.5)]"
          >
            Участвовать в круглом столе
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] px-6 md:px-[24px] py-3 md:py-[12px] rounded-[8px] text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] transition-all hover:shadow-[0_0_30px_rgba(119,205,221,0.3)]"
          >
            <div className="absolute border border-[rgba(119,205,221,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            Зарегистрироваться на лекторий
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
