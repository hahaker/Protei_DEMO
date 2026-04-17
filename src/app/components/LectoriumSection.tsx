import { motion } from 'motion/react';

export function LectoriumSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-[156px] py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-[1128px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:gap-6"
        >
          <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px]">
            Программа лекторий
          </h2>

          <div className="flex flex-col gap-4">
            {[
              { time: "10:00", title: "Регистрация участников" },
              { time: "10:30", title: "Открытие мероприятия" },
              { time: "11:00", title: "Основной доклад" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-[60px] md:w-[80px] text-[#75C9EA] font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px]">
                  {item.time}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#75C9EA] to-transparent group-hover:to-[#75C9EA] transition-all" />
                <p className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px]">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:gap-6"
        >
          <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px]">
            Нетворкинг на «круглом столе»
          </h2>

          <div className="flex flex-col gap-4">
            {[
              { time: "14:00", title: "Начало дискуссии" },
              { time: "15:00", title: "Кофе-брейк и нетворкинг" },
              { time: "16:00", title: "Панельная дискуссия" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ x: -10 }}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <p className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] text-right">
                  {item.title}
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-[#75C9EA] to-transparent group-hover:to-[#75C9EA] transition-all" />
                <div className="w-[60px] md:w-[80px] text-right text-[#75C9EA] font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px]">
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
