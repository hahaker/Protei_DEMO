import { motion } from 'motion/react';
import imgStack from "figma:asset/b5d32609e4ea633c05e86cf0627d91a2a97d3802.png";
import imgSecurityShield from "figma:asset/201cf3b3f6ef6a3e8fc795a41ffec412bc79a0ce.png";
import imgDocument from "figma:asset/c24dd147aab0a04efc7e6ed009f6599c0a0c687d.png";
import imgCyberSecurity from "figma:asset/9f1a5b6f4302c56d2bbbeb050f4484fb049e2297.png";
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: <img src={imgStack} alt="" className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Отечественные решения",
      description: "Внедрение российских технологий для обеспечения технологической независимости и устойчивости критической инфраструктуры"
    },
    {
      icon: <img src={imgSecurityShield} alt="" className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Безопасность и защита данных",
      description: "Комплексный подход к защите информации с использованием сертифицированных средств защиты информации"
    },
    {
      icon: <img src={imgDocument} alt="" className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Нормативное регулирование",
      description: "Соответствие требованиям регуляторов и актуальному законодательству в области информационной безопасности"
    },
    {
      icon: <img src={imgCyberSecurity} alt="" className="w-12 h-12 md:w-16 md:h-16" />,
      title: "Контролируемость инфраструктуры",
      description: "Обеспечение полного контроля над ИТ-инфраструктурой от микроэлектроники до конструктива"
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
          Точка выбора для игроков ИТ
        </h2>
        <p className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] max-w-[680px] mx-auto opacity-90">
          Обсуждаем стратегии развития отрасли на всех уровнях — от производителей до регуляторов
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[1128px] mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}
