'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function FinalCta() {
    const locale = useLocale();

    return (
        <section id="quick-contact" className="py-24 md:py-32 bg-white text-black relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="lg:w-1/2 flex flex-col gap-10 order-2 lg:order-1 w-full relative z-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                        >
                            {locale === 'he' ? 'זמן לעדכן את.' : 'حان الوقت لتحديث.'}<br />
                            <span className="text-black/30">{locale === 'he' ? 'החיוך שלך.' : 'ابتسامتك.'}</span>
                        </motion.h2>

                        {/* Simple & Premium Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col gap-6 w-full max-w-md"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-black/50 font-medium">
                                    {locale === 'he' ? 'שם מלא' : 'الاسم الكامل'}
                                </label>
                                <input
                                    type="text"
                                    placeholder={locale === 'he' ? 'הזן שם מלא' : 'أدخل الاسم الكامل'}
                                    className="border-b border-black/20 bg-transparent py-3 px-0 outline-none focus:border-black transition-colors placeholder:text-black/20 text-lg"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-black/50 font-medium">
                                    {locale === 'he' ? 'טלפון' : 'رقم الهاتف'}
                                </label>
                                <input
                                    type="tel"
                                    placeholder={locale === 'he' ? 'הזן מספר טלפון' : 'أدخل رقم الهاتف'}
                                    className="border-b border-black/20 bg-transparent py-3 px-0 outline-none focus:border-black transition-colors placeholder:text-black/20 text-lg text-left"
                                    dir="ltr"
                                />
                            </div>

                            <button type="submit" className="mt-8 flex items-center justify-between bg-black text-white hover:text-black hover:bg-black/5 border border-transparent hover:border-black rounded-full py-4 px-8 transition-colors group w-full">
                                <span className="font-semibold tracking-wider text-sm uppercase group-hover:text-black transition-colors">
                                    {locale === 'he' ? 'שליחה מהירה' : 'إرسال سريع'}
                                </span>
                                <div className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                                    {locale === 'he' ? <ArrowLeft className="w-5 h-5 text-white group-hover:text-black" /> : <ArrowRight className="w-5 h-5 text-white group-hover:text-black" />}
                                </div>
                            </button>
                        </motion.form>
                    </div>

                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full aspect-[4/5] bg-[#F5F5F5] overflow-hidden rounded-sm"
                        >
                            <Image
                                src="/images/gloved_hand.png"
                                alt="Medical Gloved Hand"
                                fill
                                className="object-cover object-center mix-blend-multiply hover:scale-105 transition-transform duration-1000 ease-out grayscale contrast-[1.1]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
