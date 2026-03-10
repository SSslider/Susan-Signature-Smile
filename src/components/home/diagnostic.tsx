'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Diagnostic() {
    const locale = useLocale();

    const services = [
        locale === 'he' ? 'סריקה דיגיטלית 3D' : 'مسح رقمي 3D',
        locale === 'he' ? 'צילומי פנורמי ו-CT' : 'صور بانورامية و-CT',
        locale === 'he' ? 'אבחון ממוחשב מדויק' : 'تشخيص دقيق محوسب',
        locale === 'he' ? 'תכנון השתלות והדמיות' : 'تخطيط زراعة الأسنان',
    ];

    return (
        <section id="diagnostic" className="py-24 md:py-32 bg-muted text-foreground">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    <div className="lg:w-1/2 space-y-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                        >
                            {locale === 'he' ? 'אבחון מתקדם.' : 'التشخيص المتقدم.'}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {services.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-background px-6 py-5 border border-border shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                                    <span className="font-semibold text-sm md:text-base tracking-wide">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Link href="#treatments" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-foreground/50 transition-colors group">
                                {locale === 'he' ? 'לכל שירותי המרפאה' : 'لجميع خدمات العيادة'}
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 rtl:rotate-90 group-hover:rtl:-translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full aspect-[16/10] lg:aspect-[4/3] bg-background border border-border overflow-hidden"
                        >
                            <Image
                                src="/images/diagnostic_machine.png"
                                alt="Advanced 3D Dental Diagnostic and CT Scanning Machine"
                                fill
                                className="object-cover object-center grayscale contrast-125 hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
