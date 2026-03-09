'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookingForm } from './booking-form';

export function BookingSection() {
    const locale = useLocale();

    return (
        <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">

            {/* Decorative large background text */}
            <h2 className="absolute top-10 start-0 text-[15vw] font-bold text-white/[0.02] whitespace-nowrap select-none pointer-events-none z-0">
                SIGNATURE
            </h2>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2 flex flex-col gap-8 md:gap-12 text-center lg:text-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                        >
                            {locale === 'he' ? 'איך נוכל.' : 'كيف يمكننا.'}<br />
                            <span className="text-white/40">{locale === 'he' ? 'לעזור לך?' : 'مساعدتك؟'}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white/60 font-light max-w-md mx-auto lg:mx-0"
                        >
                            {locale === 'he'
                                ? 'ספר לנו בקצרה על מה תרצה להתייעץ, מתי נוח לך שנדבר, ונחזור אליך בהקדם האפשרי עם תשובות מדויקות.'
                                : 'أخبرنا بإيجاز عما تود استشارتنا فيه، ومتى يناسبك التحدث، وسنعود إليك في أقرب وقت ممكن.'}
                        </motion.p>
                    </div>

                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end border-white/20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full"
                        >
                            <BookingForm />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
