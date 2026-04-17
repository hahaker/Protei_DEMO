import { motion } from 'motion/react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Важное мероприятие для обсуждения актуальных вопросов импортозамещения и локализации ИТ-решений",
      author: "Представитель Минпромторга",
      position: "Регулятор"
    },
    {
      quote: "Отличная возможность для обмена опытом и установления деловых контактов в сфере информационной безопасности",
      author: "ИТ-директор крупной компании",
      position: "Потребитель В2В"
    },
    {
      quote: "Круглый стол позволяет понять требования заказчиков и выстроить правильную стратегию развития продукта",
      author: "Генеральный директор ИТ-компании",
      position: "Производитель"
    }
  ];

  return (
    <section className="relative px-4 md:px-8 lg:px-[156px] py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1128px] mx-auto"
      >
        <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-center mb-12 md:mb-16">
          Отзывы участников
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] p-6 md:p-8 rounded-[8px] flex flex-col gap-4"
            >
              <div className="absolute border border-[rgba(119,205,221,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="text-[#75C9EA] text-[40px] leading-none opacity-50">
                "
              </div>

              <p className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] opacity-90">
                {testimonial.quote}
              </p>

              <div className="mt-auto pt-4 border-t border-[rgba(119,205,221,0.2)]">
                <p className="text-white font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  {testimonial.author}
                </p>
                <p className="text-[#75C9EA] font-['Montserrat',sans-serif] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] mt-1">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
