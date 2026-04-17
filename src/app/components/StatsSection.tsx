import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ value, label, suffix = '', delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div 
        className="text-[36px] md:text-[56px] font-bold font-['Montserrat',sans-serif] bg-clip-text bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] text-transparent mb-2"
      >
        {count}{suffix}
      </motion.div>
      <p className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] opacity-80">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-[156px] py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1128px] mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem value={500} label="Участников" suffix="+" delay={0} />
          <StatItem value={50} label="Спикеров" suffix="+" delay={0.1} />
          <StatItem value={3} label="Дня мероприятия" delay={0.2} />
          <StatItem value={20} label="Тем для обсуждения" suffix="+" delay={0.3} />
        </div>
      </motion.div>
    </section>
  );
}
