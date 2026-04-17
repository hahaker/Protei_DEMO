import { motion } from 'motion/react';

export function PartnersSection() {
  const partners = Array(6).fill(null);

  return (
    <section className="relative px-4 md:px-8 lg:px-[156px] py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1128px] mx-auto"
      >
        <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-center mb-8 md:mb-12">
          Партнеры мероприятия
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative bg-gradient-to-r from-[rgba(0,109,239,0.05)] to-[rgba(114,199,252,0.05)] p-6 rounded-[8px] aspect-square flex items-center justify-center group transition-all hover:shadow-[0_0_30px_rgba(119,205,221,0.2)]"
            >
              <div className="absolute border border-[rgba(119,205,221,0.3)] border-solid inset-0 pointer-events-none rounded-[8px] group-hover:border-[rgba(119,205,221,0.6)] transition-colors" />
              <div className="text-white/30 font-['Montserrat',sans-serif] text-[12px] text-center">
                LOGO
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
