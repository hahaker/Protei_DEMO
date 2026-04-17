import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ opacity }}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,12,20,0.6)] to-transparent pointer-events-none" />
    </div>
  );
}
