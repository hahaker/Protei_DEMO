import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 40px rgba(119,205,221,0.3)"
      }}
      className="relative bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] p-6 md:p-8 rounded-[8px] group transition-all"
    >
      <div className="absolute border border-[rgba(119,205,221,0.8)] border-solid inset-0 pointer-events-none rounded-[8px] group-hover:border-[rgba(119,205,221,1)] transition-colors" />
      
      <motion.div 
        className="mb-4 md:mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-white font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] mb-3 md:mb-4">
        {title}
      </h3>
      
      <p className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] opacity-90">
        {description}
      </p>
    </motion.div>
  );
}
