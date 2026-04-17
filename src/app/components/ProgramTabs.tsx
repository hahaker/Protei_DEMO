import { motion } from 'motion/react';
import { useState } from 'react';

interface TabContent {
  day: string;
  date: string;
  events: {
    time: string;
    title: string;
    description: string;
  }[];
}

export function ProgramTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabContent[] = [
    {
      day: "День 1",
      date: "9 апреля",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Регистрация участников",
          description: "Приветственный кофе"
        },
        {
          time: "10:00 - 11:30",
          title: "Открытие мероприятия",
          description: "Приветственные слова организаторов и ключевых партнеров"
        },
        {
          time: "11:30 - 13:00",
          title: "Панельная дискуссия",
          description: "Стратегия импортозамещения в ИТ-отрасли"
        },
        {
          time: "13:00 - 14:00",
          title: "Обед",
          description: "Нетворкинг"
        }
      ]
    },
    {
      day: "День 2",
      date: "10 апреля",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Круглый стол",
          description: "Требования регуляторов к производителям"
        },
        {
          time: "10:00 - 12:00",
          title: "Технические доклады",
          description: "Лучшие практики разработки безопасного ПО"
        },
        {
          time: "12:00 - 13:30",
          title: "Мастер-классы",
          description: "Практические кейсы внедрения отечественных решений"
        }
      ]
    },
    {
      day: "День 3",
      date: "11 апреля",
      events: [
        {
          time: "09:00 - 11:00",
          title: "Лекторий",
          description: "Информационная безопасность КИИ"
        },
        {
          time: "11:00 - 13:00",
          title: "Круглый стол",
          description: "Итоги и перспективы развития отрасли"
        },
        {
          time: "13:00 - 14:00",
          title: "Закрытие мероприятия",
          description: "Вручение сертификатов"
        }
      ]
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
        <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-center mb-8 md:mb-12">
          Программа мероприятия
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8 md:mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 md:px-8 py-3 md:py-4 rounded-[8px] font-['Montserrat',sans-serif] text-[14px] md:text-[16px] transition-all ${
                activeTab === index
                  ? 'bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] text-white shadow-[0_0_30px_rgba(119,205,221,0.4)]'
                  : 'bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] text-white'
              }`}
            >
              {activeTab !== index && (
                <div className="absolute border border-[rgba(119,205,221,0.8)] inset-0 pointer-events-none rounded-[8px]" />
              )}
              <div className="font-semibold">{tab.day}</div>
              <div className="text-[12px] md:text-[14px] opacity-80">{tab.date}</div>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-4 md:space-y-6"
        >
          {tabs[activeTab].events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ x: 10 }}
              className="relative bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] p-4 md:p-6 rounded-[8px] group cursor-pointer"
            >
              <div className="absolute border border-[rgba(119,205,221,0.6)] inset-0 pointer-events-none rounded-[8px] group-hover:border-[rgba(119,205,221,1)] transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div className="text-[#75C9EA] font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[16px] whitespace-nowrap">
                  {event.time}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mb-1">
                    {event.title}
                  </h3>
                  <p className="text-white/70 font-['Montserrat',sans-serif] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px]">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
