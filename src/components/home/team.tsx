'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Team() {
    const locale = useLocale();

    return (
        <section id="team" className="py-24 md:py-32 bg-secondary text-foreground relative z-10">
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                            {locale === 'he' ? 'מי שמאחורי.' : 'من يقف وراء.'}<br />
                            <span className="text-foreground/40">{locale === 'he' ? 'החיוך שלך.' : 'ابتسامتك.'}</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/3 text-muted-foreground font-light text-sm md:text-base leading-relaxed"
                    >
                        {locale === 'he'
                            ? 'צוות רפואי המורכב ממומחים וידיים אמונות, המקדישים את חייהם למצוינות דנטלית בסביבה מרגיעה ובטוחה.'
                            : 'طاقم طبي يتكون من خبراء وأيدٍ أمينة يكرسون حياتهم للتميز في طب الأسنان.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Main Doctor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[3/4] group overflow-hidden bg-black"
                    >
                        <Image
                            src="/images/team_phadi.jpg"
                            alt="Dr. Fadi Susan"
                            fill
                            className="object-cover object-top grayscale brightness-75 contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-0 start-0 p-6 md:p-8 z-20">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                {locale === 'he' ? 'ד״ר פאדי סוסאן' : 'د. فادي سوسان'}
                            </h3>
                            <p className="text-white/60 text-xs md:text-sm font-light tracking-wide">
                                {locale === 'he' ? 'מייסד ורופא ראשי' : 'المؤسس والطبيب الرئيسي'}
                            </p>
                        </div>
                    </motion.div>

                    {/* Dr. Female */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative aspect-[3/4] group overflow-hidden bg-black"
                    >
                        <Image
                            src="/images/team_doctor_female.png"
                            alt="Dr. Maya"
                            fill
                            className="object-cover object-top grayscale brightness-75 contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-0 start-0 p-6 md:p-8 z-20">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                {locale === 'he' ? 'ד״ר מאיה לוי' : 'د. مايا ليفي'}
                            </h3>
                            <p className="text-white/60 text-xs md:text-sm font-light tracking-wide">
                                {locale === 'he' ? 'מומחית לאסתטיקה ושיקום' : 'أخصائية التجميل والترميم'}
                            </p>
                        </div>
                    </motion.div>

                    {/* Assistant Female */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-[3/4] group overflow-hidden bg-black"
                    >
                        <Image
                            src="/images/team_assistant_female.png"
                            alt="Dental Assistant"
                            fill
                            className="object-cover object-top grayscale brightness-75 contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-0 start-0 p-6 md:p-8 z-20">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                {locale === 'he' ? 'שירן כהן' : 'شيران كوهين'}
                            </h3>
                            <p className="text-white/60 text-xs md:text-sm font-light tracking-wide">
                                {locale === 'he' ? 'סייעת קלינית בכירה' : 'مساعدة سريرية أولى'}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
