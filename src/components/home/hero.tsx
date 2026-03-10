'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownLeft, ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    const locale = useLocale();

    return (
        <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-16 md:pt-20 pb-4">

            {/* Background Image Area - Image covers the entire section as requested */}
            <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
                <Image
                    src="/images/hero_portrait_v36.png"
                    alt="Beautiful portrait of a smiling woman for Susan Signature Smile Premium Dental Clinic"
                    fill
                    priority
                    className="object-cover object-[75%_center] sm:object-right md:object-[center_top] opacity-100 mix-blend-screen grayscale contrast-[1.15] brightness-90"
                />
                {/* Subtle dark overlay for mobile to ensure text readability without casting half-shadows on her face */}
                <div className="absolute inset-0 bg-black/40 sm:bg-black/20 pointer-events-none z-10" />
            </div>

            {/* Inner Border Box framing (like Behance ref) */}
            <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center relative z-20 w-full" dir="ltr">

                <div className="relative w-full h-[calc(100svh-5rem)] md:h-[calc(100svh-8rem)] mt-2 sm:mt-4 md:mt-12 flex flex-col border border-white/20 p-4 sm:p-6 md:p-12 lg:p-16 rounded-sm">

                    {/* Top small text inside the box */}
                    <div className="flex justify-between items-center w-full text-white/50 text-[10px] sm:text-xs tracking-widest uppercase absolute top-4 sm:top-6 md:top-12 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-30">
                        <span>Susan Signature</span>
                        <span dir={locale === 'he' ? 'rtl' : locale === 'ar' ? 'rtl' : 'ltr'}>{locale === 'he' ? 'חיפה, ישראל' : 'حيفا، إسرائيل'}</span>
                    </div>

                    {/* Main Content inside Box - Absolute Free Positioning */}
                    <div className="absolute inset-x-0 inset-y-0 w-full h-full z-30 pointer-events-none">

                        {/* Large Text - Left Aligned to fall strictly into negative space */}
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="absolute top-[18%] md:top-[35%] md:-translate-y-1/2 -left-4 sm:left-2 md:left-10 lg:left-14 text-[9vw] leading-[0.95] sm:text-[10vw] md:text-[4rem] lg:text-[4.5rem] xl:text-[6rem] md:leading-[0.85] font-bold tracking-tight md:tracking-[-0.04em] text-white flex flex-col items-start z-40 drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)] w-[55vw] sm:w-[50vw] md:w-auto md:max-w-[48vw] lg:max-w-[48vw] xl:max-w-[50vw]"
                            dir="ltr"
                        >
                            {/* RTL block encapsulated to respect text flow without breaking physical left alignment */}
                            {locale === 'he' ? (
                                <span dir="rtl" className="flex flex-col items-start text-right w-full">
                                    <span className="pr-0 whitespace-nowrap">כי החיוך שלך</span>
                                    <span className="pr-[30%] sm:pr-[25%] md:pr-[20%] opacity-90 whitespace-nowrap">ראוי</span>
                                    <span className="pr-[5%] opacity-100 whitespace-nowrap">להכי טוב</span>
                                </span>
                            ) : (
                                <span dir="rtl" className="flex flex-col items-start text-right w-full">
                                    <span className="pr-0 whitespace-nowrap">لأن ابتسامتك</span>
                                    <span className="pr-[30%] sm:pr-[25%] md:pr-[20%] opacity-90 whitespace-nowrap">تستحق</span>
                                    <span className="pr-[5%] opacity-100 whitespace-nowrap">الأفضل</span>
                                </span>
                            )}
                        </motion.h1>

                        {/* Smaller paragraph - Right Aligned overlaying the hair / opposite extreme side */}
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            className="absolute bottom-[40%] sm:bottom-[35%] md:bottom-auto md:top-[50%] lg:top-[55%] left-2 sm:left-4 md:left-10 lg:left-14 text-[9px] sm:text-[10px] md:text-sm font-light text-white/90 w-[50vw] sm:w-[45vw] md:w-[35%] max-w-[170px] md:max-w-[320px] leading-relaxed text-right rtl:md:text-right md:text-left drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] z-40"
                            dir="rtl"
                        >
                            {locale === 'he'
                                ? 'אנו מרפאת שיניים מודרנית, דיגיטלית וחדשנית. מתמקדים במתן טיפולים בטוחים ויעילים בטכנולוגיה החדישה ביותר.'
                                : 'نحن عيادة أسنان حديثة ورقمية ومبتكرة. نركز على تقديم علاجات آمنة وفعالة بأحدث التقنيات.'}
                        </motion.p>
                    </div>

                    {/* Bottom Info Bar inside Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full absolute bottom-4 sm:bottom-6 md:bottom-12 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-40 gap-4 md:gap-0 pr-8 rtl:pr-4 md:pr-24 lg:pr-24"
                        dir={locale === 'he' ? 'rtl' : locale === 'ar' ? 'rtl' : 'ltr'}
                    >
                        {/* Details */}
                        <div className="flex flex-row gap-4 sm:gap-6 md:gap-16 items-start w-full md:w-auto overflow-hidden">
                            {/* Decorative L shape corner like reference */}
                            <div className="hidden md:block w-8 h-8 border-r border-b border-white/30 shrink-0" />

                            <div className="flex flex-col gap-1 text-left rtl:text-right shrink-0">
                                <span className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest">{locale === 'he' ? 'שעות פעילות' : 'ساعات العمل'}</span>
                                <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide">{locale === 'he' ? "א' - ו' 08:00-20:00" : "الإثنين - السبت 8:00-20:00"}</span>
                            </div>

                            <div className="flex flex-col gap-1 text-left rtl:text-right shrink-0">
                                <span className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest">{locale === 'he' ? 'מיקום' : 'الموقع'}</span>
                                <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide">{locale === 'he' ? 'שד׳ בן גוריון 12, חיפה' : 'جادة بن غوريون 12، حيفا'}</span>
                            </div>
                        </div>

                        {/* CTA Pillow Button exactly like reference */}
                        <Link href="#contact" className="inline-flex rounded-full bg-white text-black items-center gap-2 sm:gap-4 py-2 px-2.5 sm:py-2.5 sm:px-3 md:py-3.5 md:px-4 hover:bg-white/90 transition-colors group pl-4 pr-1.5 rtl:pr-4 rtl:pl-1.5 sm:pl-6 sm:pr-2.5 sm:rtl:pr-6 sm:rtl:pl-2.5 w-auto mt-2 md:mt-0 justify-between shrink-0 drop-shadow-xl z-50">
                            <span className="font-semibold text-xs sm:text-sm md:text-base tracking-tight whitespace-nowrap">{locale === 'he' ? 'לייעוץ עכשיו' : 'استشارة الآن'}</span>
                            <div className="bg-black text-white rounded-full p-2 sm:p-2.5 lg:p-3 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                                <ArrowDownLeft className="w-3 h-3 sm:w-4 sm:h-4 rtl:-scale-x-100" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
