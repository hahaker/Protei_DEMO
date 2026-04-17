import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-iev34aw50n";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative px-4 md:px-8 lg:px-[156px] py-8 md:py-12 mt-20 border-t border-[rgba(117,201,234,0.2)]"
    >
      <div className="max-w-[1128px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="h-[32px] w-[115px]"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.281 42">
                <g>
                  <path d={svgPaths.p37aeb80} fill="white" />
                  <path d={svgPaths.p38024200} fill="white" />
                  <path d={svgPaths.p2d27cf00} fill="white" />
                  <path d={svgPaths.p3691d000} fill="white" />
                  <path d={svgPaths.p23f2fd80} fill="white" />
                  <path d={svgPaths.pc4c8600} fill="white" />
                  <path d={svgPaths.p217ecf00} fill="white" />
                  <path d={svgPaths.p10c2e900} fill="white" />
                  <path d={svgPaths.p9aae100} fill="white" />
                  <path d={svgPaths.p233dca00} fill="white" />
                  <path d={svgPaths.p23d34d00} fill="white" />
                  <path d={svgPaths.pd80c300} fill="white" />
                  <path d={svgPaths.p2e296a00} fill="white" />
                  <path d={svgPaths.p16aa5f00} fill="white" />
                  <path d={svgPaths.p16478600} fill="white" />
                  <path d={svgPaths.p1f801600} fill="white" />
                  <path d={svgPaths.p312a4e00} fill="white" />
                  <path d={svgPaths.p38212ac0} fill="white" />
                  <path d={svgPaths.p5548dc0} fill="white" />
                  <path d={svgPaths.p168c2000} fill="white" />
                  <path d={svgPaths.p1aa0ac70} fill="white" />
                  <path d={svgPaths.p89fb140} fill="white" />
                  <path d={svgPaths.p21a81100} fill="white" />
                </g>
              </svg>
            </motion.div>
            <p className="text-white font-['Montserrat',sans-serif] text-[14px] leading-[20px] opacity-70">
              Группа компаний ПРОТЕЙ<br />
              Технологии связи и безопасности
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-['Montserrat',sans-serif] font-semibold text-[16px] mb-2">
              Контакты
            </h3>
            <motion.a
              whileHover={{ x: 5, color: '#75C9EA' }}
              href="tel:+74951234567"
              className="text-white font-['Montserrat',sans-serif] text-[14px] leading-[20px] opacity-70 transition-colors"
            >
              +7 (495) 123-45-67
            </motion.a>
            <motion.a
              whileHover={{ x: 5, color: '#75C9EA' }}
              href="mailto:info@protei.ru"
              className="text-white font-['Montserrat',sans-serif] text-[14px] leading-[20px] opacity-70 transition-colors"
            >
              info@protei.ru
            </motion.a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-['Montserrat',sans-serif] font-semibold text-[16px] mb-2">
              Информация
            </h3>
            {['О мероприятии', 'Программа', 'Контакты', 'Политика конфиденциальности'].map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ x: 5, color: '#75C9EA' }}
                href="#"
                className="text-white font-['Montserrat',sans-serif] text-[14px] leading-[20px] opacity-70 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-[rgba(117,201,234,0.2)] text-center"
        >
          <p className="text-white font-['Montserrat',sans-serif] text-[12px] md:text-[14px] opacity-50">
            © 2026 ГК ПРОТЕЙ. Все права защищены.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
