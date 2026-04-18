import { motion } from 'motion/react';

interface TopicProps {
  badge: string;
  title: string;
  description: string;
  delay?: number;
}

function Topic({ badge, title, description, delay = 0 }: TopicProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      className="flex gap-4 md:gap-6 items-start"
    >
      <motion.div 
        className="size-[40px] md:size-[48px] shrink-0"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="url(#paint0_linear)" fillOpacity="0.1" r="23.5" stroke="#75C9EA" />
          <circle cx="24" cy="24" fill="#75C9EA" r="8" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="0" x2="48" y1="24" y2="24">
              <stop stopColor="#006DEF" />
              <stop offset="1" stopColor="#72C7FC" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="flex-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.4 }}
          className="bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] px-4 py-1 rounded-[8px] inline-block mb-3 md:mb-4"
        >
          <div className="absolute border border-[#75c9ea] border-solid pointer-events-none rounded-[8px]" />
          <p className="font-['Montserrat',sans-serif] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-white">
            {badge}
          </p>
        </motion.div>

        <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-white mb-3 md:mb-4">
          {title}
        </h3>

        <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white opacity-90">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function RoundTableSection() {
  const topics = [
    {
      badge: "ПРОИЗВОДИТЕЛИ",
      title: "Разработка ПО и производство",
      description: "Почему разработка в производстве важна? Как выполнить требования регуляторов по отечественному производству: от микроэлектроники до конструктива. Как обеспечить реальную контролируемость? Как отличить псевдо-производство от реального?"
    },
    {
      badge: "ПРОИЗВОДИТЕЛИ",
      title: "Разработка ПО",
      description: "Почему важна безопасная разработка ПО? Написание кода без использования Open-Source Software (OSS) и правильное использование инструментов на основе искусственного интеллекта. Комплексный аудит ИБ, тестирование на проникновение, оценка и мониторинг защищённости корпоративных систем."
    },
    {
      badge: "ПОТРЕБИТЕЛИ",
      title: "Потребители В2В",
      description: "Важность вопроса технологической безопасности. Является ли ключевым приоритетом реальная устойчивость к кибератакам, способность противостоять сложным и продолжительным угрозам? Инструменты для защиты инфраструктуры."
    },
    {
      badge: "ПОТРЕБИТЕЛИ",
      title: "Потребители В2G",
      description: "Какие основные требования к сетям и инфраструктуре органов государственной власти (ОГВ)? Важность обеспечения безопасности инфраструктуры ОГВ и принимаемые меры по ее развитию."
    },
    {
      badge: "РЕГУЛЯТОРЫ",
      title: "Регулятор в сфере создания",
      description: "Какие меры предпринимает Минпромторг для обеспечения безопасности данных и бесперебойной работы систем ОГВ и объектов КИИ? Организация перехода на российские ПАК, проверка актуальности и достоверности категорирования объектов КИИ. Меры поддержки отечественных производителей и потребителей при внедрении ими российских решений на своей ИТ-инфраструктуре."
    },
    {
      badge: "РЕГУЛЯТОРЫ",
      title: "Регулятор в сфере ИБ",
      description: "Как участникам круглого стола обеспечить безопасность информации, оказывающей существенное влияние на безопасность государства в информационной сфере: актуальные требования. Повышение устойчивости КИИ и контроль за соблюдением требований регулятора. Сертификация средств защиты информации и аттестации информационных систем. Приоритеты."
    }
  ];

  return (
    <section className="relative px-4 md:px-8 lg:px-[156px] py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] mb-4">
          Программа круглого стола
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-[1128px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-10">
          {topics.map((topic, index) => (
            <Topic
              key={index}
              {...topic}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:sticky lg:top-24 lg:self-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[rgba(0,109,239,0.15)] to-[rgba(114,199,252,0.08)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,12,20,0.6)] to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[rgba(0,109,239,0.15)] to-[rgba(114,199,252,0.08)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,12,20,0.6)] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}