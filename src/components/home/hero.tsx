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

            {/* Background Image Area (Model on Right Side) */}
            <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
                {/* Desktop layout: force image to the right with object-position.
                    We bypass RTL here so the woman is ALWAYS on the right like the reference image */}
                <Image
                    src="/images/hero_portrait_v35.png"
                    alt="Premium Dental Patient Portrait"
                    fill
                    priority
                    className="object-cover object-[center_top] md:object-[65%_10%] opacity-90 mix-blend-screen grayscale contrast-[1.25] brightness-90"
                />
                {/* Horizontal Gradient for Text Readability - forced to LEFT side to match image */}
                <div className="absolute inset-y-0 left-0 w-full md:w-[65%] lg:w-[60%] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
            </div>

            {/* Inner Border Box framing (like Behance ref) */}
            <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center relative z-20 w-full" dir="ltr">

                <div className="relative w-full h-[calc(100svh-5rem)] md:h-[calc(100svh-8rem)] mt-2 sm:mt-4 md:mt-12 flex flex-col border border-white/20 p-4 sm:p-6 md:p-12 lg:p-16 rounded-sm">

                    {/* Top small text inside the box */}
                    <div className="flex justify-between items-center w-full text-white/50 text-[10px] sm:text-xs tracking-widest uppercase absolute top-4 sm:top-6 md:top-12 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-30">
                        <span>Susan Signature</span>
                        <span dir={locale === 'he' ? 'rtl' : locale === 'ar' ? 'rtl' : 'ltr'}>{locale === 'he' ? 'חיפה, ישראל' : 'حيفا، إسرائيل'}</span>
                    </div>

                    {/* Main Content inside Box - Vertically Centered */}
                    <div className="flex flex-col justify-center h-full w-full z-30 relative pt-8 md:pt-12 pb-24 md:pb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-[12vw] sm:text-[10vw] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-bold leading-[0.85] tracking-[-0.04em] text-white flex flex-col text-left rtl:text-right relative w-full z-40"
                        >
                            {locale === 'he' ? (
                                <span dir="rtl" className="flex flex-col items-start w-full drop-shadow-2xl">
                                    <span className="pr-0 whitespace-nowrap">כי החיוך שלך</span>
                                    <span className="pr-[18%] opacity-90 whitespace-nowrap">ראוי</span>
                                    <span className="pr-[5%] opacity-100 whitespace-nowrap">להכי טוב</span>
                                </span>
                            ) : (
                                <span dir="ltr" className="flex flex-col items-start w-full drop-shadow-2xl mix-blend-normal">
                                    <span className="pl-0 whitespace-nowrap">Because your smile</span>
                                    <span className="pl-[18%] opacity-90 whitespace-nowrap">deserves</span>
                                    <span className="pl-[5%] opacity-100 whitespace-nowrap">the Best</span>
                                </span>
                            )}
                        </motion.h1>

                        {/* Smaller paragraph - positioned right side, vertically aligned near the mouth/smile like reference */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            className={`text-[10px] md:text-xs lg:text-sm font-light text-white/80 md:text-white/60 max-w-[200px] md:max-w-[280px] leading-relaxed absolute ${locale === 'he' || locale === 'ar' ? 'left-0 text-right' : 'right-0 text-left'} top-[60%] lg:top-[55%] transform -translate-y-1/2 drop-shadow-md z-40`}
                            dir={locale === 'he' ? 'rtl' : locale === 'ar' ? 'rtl' : 'ltr'}
                        >
                            {locale === 'he'
                                ? 'אנו מרפאת שיניים מודרנית, דיגיטלית וחדשנית. מתמקדים במתן טיפולים בטוחים ויעילים בטכנולוגיה החדישה ביותר.'
                                : 'We are a modern, digital and innovative dental clinic. focused on providing safe and effective treatments with the latest technology.'}
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
