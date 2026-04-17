import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  phone: string;
  company: string;
  position: string;
  email: string;
  questions: string;
}

const LECTURES = [
  'Контролируемость архитектуры ПО и производства',
  'Безопасная разработка без Open-Source зависимостей',
  'Устойчивость КИИ к сложным киберугрозам',
  'Требования Минпромторга: переход на российские ПАК',
  'Требования ФСТЭК: сертификация и аттестация систем',
  'Тестирование на проникновение и аудит ИБ',
];

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,12,20,0.85)] backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative max-w-[480px] w-full bg-gradient-to-br from-[rgba(0,109,239,0.15)] to-[rgba(114,199,252,0.1)] rounded-[12px] p-8 md:p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute border border-[rgba(119,205,221,0.8)] inset-0 rounded-[12px] pointer-events-none" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 400, damping: 20 }}
          className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-[rgba(119,205,221,0.3)] to-[rgba(11,161,221,0.3)] border border-[#75C9EA] flex items-center justify-center"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 16L13 23L26 9" stroke="#75C9EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <h3 className="text-white font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[26px] leading-[30px] md:leading-[34px] mb-3">
          Заявка отправлена!
        </h3>
        <p className="text-white/70 font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-8">
          Мы получили вашу заявку и свяжемся с вами в&nbsp;ближайшее время для подтверждения участия.
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onClose}
          className="w-full bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] px-6 py-3 rounded-[8px] text-white font-['Montserrat',sans-serif] text-[16px] leading-[24px] transition-all hover:shadow-[0_0_30px_rgba(119,205,221,0.5)]"
        >
          Закрыть
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function ErrorModal({ onClose, onRetry }: { onClose: () => void; onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,12,20,0.85)] backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative max-w-[480px] w-full bg-gradient-to-br from-[rgba(239,68,68,0.1)] to-[rgba(239,68,68,0.05)] rounded-[12px] p-8 md:p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute border border-[rgba(239,68,68,0.5)] inset-0 rounded-[12px] pointer-events-none" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 400, damping: 20 }}
          className="mx-auto mb-6 w-16 h-16 rounded-full bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.5)] flex items-center justify-center"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 10V17M16 22V22.5" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M13.3 5.5L3.3 22.5C2.1 24.5 3.5 27 5.9 27H26.1C28.5 27 29.9 24.5 28.7 22.5L18.7 5.5C17.5 3.5 14.5 3.5 13.3 5.5Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <h3 className="text-white font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[26px] leading-[30px] md:leading-[34px] mb-3">
          Ошибка отправки
        </h3>
        <p className="text-white/70 font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-8">
          Произошла ошибка на стороне сервера. Пожалуйста, попробуйте снова или&nbsp;свяжитесь с&nbsp;нами напрямую.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRetry}
            className="flex-1 bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] px-6 py-3 rounded-[8px] text-white font-['Montserrat',sans-serif] text-[15px] leading-[24px] transition-all hover:shadow-[0_0_30px_rgba(119,205,221,0.5)]"
          >
            Попробовать снова
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
            className="relative flex-1 bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] px-6 py-3 rounded-[8px] text-white font-['Montserrat',sans-serif] text-[15px] leading-[24px] transition-all"
          >
            <div className="absolute border border-[rgba(119,205,221,0.8)] inset-0 rounded-[8px] pointer-events-none" />
            Закрыть
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

const fieldClass = (hasError: boolean) =>
  `w-full bg-[rgba(0,12,20,0.5)] rounded-[8px] px-3 py-2 text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] placeholder:text-[rgba(255,255,255,0.3)] border transition-colors outline-none focus:shadow-[0_0_0_2px_rgba(117,201,234,0.25)] ${
    hasError
      ? 'border-[rgba(239,68,68,0.7)] focus:border-[rgba(239,68,68,1)]'
      : 'border-[rgba(255,255,255,0.08)] focus:border-[#75C9EA]'
  }`;

const errorMsg = (msg: string | undefined) =>
  msg ? (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[rgba(239,68,68,0.9)] font-['Montserrat',sans-serif] text-[12px] leading-[16px] mt-1"
    >
      {msg}
    </motion.p>
  ) : null;

export function RegistrationForm() {
  const [selectedLectures, setSelectedLectures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const toggleLecture = (title: string) => {
    setSelectedLectures((prev) =>
      prev.includes(title) ? prev.filter((l) => l !== title) : [...prev, title]
    );
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);

    if (Math.random() < 0.3) {
      setModal('error');
    } else {
      reset();
      setSelectedLectures([]);
      setModal('success');
    }
  };

  const handleRetry = () => {
    setModal(null);
    handleSubmit(onSubmit)();
  };

  const lectureWord = (n: number) => {
    if (n % 100 >= 11 && n % 100 <= 19) return 'лекций';
    if (n % 10 === 1) return 'лекция';
    if (n % 10 >= 2 && n % 10 <= 4) return 'лекции';
    return 'лекций';
  };

  return (
    <>
      <AnimatePresence>
        {modal === 'success' && <SuccessModal onClose={() => setModal(null)} />}
        {modal === 'error' && <ErrorModal onClose={() => setModal(null)} onRetry={handleRetry} />}
      </AnimatePresence>

      <section id="registration" className="relative px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[744px] mx-auto relative bg-gradient-to-r from-[rgba(0,109,239,0.1)] to-[rgba(114,199,252,0.1)] p-6 md:p-12 rounded-[8px]"
        >
          <div className="absolute border border-[rgba(119,205,221,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[36px] leading-[32px] md:leading-[44px] mb-8 md:mb-10 text-center"
          >
            Зарегистрироваться на лекторий
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5 md:gap-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  ФИО*
                </label>
                <input
                  {...register('name', { required: 'Введите ваше ФИО' })}
                  placeholder="Иванов Иван Иванович"
                  className={fieldClass(!!errors.name)}
                />
                {errorMsg(errors.name?.message)}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  Телефон*
                </label>
                <input
                  {...register('phone', {
                    required: 'Введите номер телефона',
                    pattern: {
                      value: /^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
                      message: 'Формат: +7 (999) 999-99-99',
                    },
                  })}
                  placeholder="+7 (987) 654-32-10"
                  className={fieldClass(!!errors.phone)}
                />
                {errorMsg(errors.phone?.message)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  Компания*
                </label>
                <input
                  {...register('company', { required: 'Введите название компании' })}
                  placeholder="Название компании"
                  className={fieldClass(!!errors.company)}
                />
                {errorMsg(errors.company?.message)}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  Должность*
                </label>
                <input
                  {...register('position', { required: 'Введите должность' })}
                  placeholder="Руководитель отдела..."
                  className={fieldClass(!!errors.position)}
                />
                {errorMsg(errors.position?.message)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  Email*
                </label>
                <input
                  {...register('email', {
                    required: 'Введите email',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Введите корректный email',
                    },
                  })}
                  placeholder="example@company.ru"
                  className={fieldClass(!!errors.email)}
                />
                {errorMsg(errors.email?.message)}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                Ваши вопросы к обсуждению
              </label>
              <textarea
                {...register('questions')}
                rows={4}
                placeholder="Какие темы вам особенно интересны?"
                className={`${fieldClass(false)} resize-none`}
              />
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                Выберите лекции для посещения
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {LECTURES.map((lecture) => {
                  const checked = selectedLectures.includes(lecture);
                  return (
                    <motion.label
                      key={lecture}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`flex items-start gap-3 p-3 rounded-[8px] cursor-pointer transition-colors border ${
                        checked
                          ? 'bg-[rgba(119,205,221,0.1)] border-[rgba(119,205,221,0.7)]'
                          : 'bg-[rgba(0,12,20,0.3)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(119,205,221,0.4)]'
                      }`}
                    >
                      <div
                        className={`mt-0.5 shrink-0 w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-colors ${
                          checked ? 'bg-[#75C9EA] border-[#75C9EA]' : 'border-[rgba(255,255,255,0.3)]'
                        }`}
                        onClick={() => toggleLecture(lecture)}
                      >
                        {checked && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#000C14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        onClick={() => toggleLecture(lecture)}
                        className="text-white/80 font-['Montserrat',sans-serif] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] select-none"
                      >
                        {lecture}
                      </span>
                    </motion.label>
                  );
                })}
              </div>
            </div>

            {/* Lecture counter + Submit */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Counter */}
              <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[16px] leading-[24px]">
                <span className="text-white">Выбрано </span>
                <span className="text-[#75C9EA] font-semibold text-[16px] md:text-[18px]">
                  {selectedLectures.length}
                </span>
                <span className="text-[#75C9EA]"> {lectureWord(selectedLectures.length)}</span>
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-[rgba(119,205,221,0.8)] to-[rgba(11,161,221,0.8)] px-6 py-3 md:py-4 rounded-[8px] text-white font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] transition-all hover:shadow-[0_0_30px_rgba(119,205,221,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Отправка...
                  </span>
                ) : (
                  'Зарегистрироваться'
                )}
              </motion.button>

              <p className="text-[rgba(255,255,255,0.3)] font-['Montserrat',sans-serif] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <span className="underline cursor-pointer hover:text-[rgba(255,255,255,0.5)] transition-colors">
                  политикой обработки персональных данных
                </span>
                .
              </p>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
}
