'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
    const locale = useLocale();

    const blocks = [
        {
            title: locale === 'he' ? 'דיוק קליני' : 'دقة سريرية',
            desc: locale === 'he'
                ? 'סטנדרטים בינלאומיים קפדניים בכל שלב בטיפול.'
                : 'معايير دولية صارمة في كل مرحلة من مراحل العلاج.'
        },
        {
            title: locale === 'he' ? 'טכנולוגיה מתקדמת' : 'تكنولوجيا متقدمة',
            desc: locale === 'he'
                ? 'מכשור דנטלי מתקדם באבחון ודימות לחוויה נטולת פשרות.'
                : 'أجهزة طب الأسنان المتقدمة في التشخيص والتصوير لتجربة لا هوادة فيها.'
        },
        {
            title: locale === 'he' ? 'חוויית טיפול רגועה' : 'تجربة علاج هادئة',
            desc: locale === 'he'
                ? 'אווירה שקטה, נקייה ויוקרתית, ללא כאב או סטרס.'
                : 'جو هادئ ونظيف وفاخر، بدون ألم أو توتر.'
        }
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-background relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-center">

                    <div className="md:w-1/2 flex flex-col gap-12 order-2 md:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight"
                        >
                            {locale === 'he' ? 'אמון.' : 'الثقة.'}<br />
                            <span className="text-foreground/30">{locale === 'he' ? 'בפרטים הקטנים.' : 'في أدق التفاصيل.'}</span>
                        </motion.h2>

                        <div className="flex flex-col gap-8">
                            {blocks.map((block, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.05, delayChildren: i * 0.2 } },
                                        hidden: {}
                                    }}
                                    className="flex flex-col gap-2 border-t border-border pt-6"
                                >
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground flex flex-wrap">
                                        {block.title.split(' ').map((word, wIdx) => (
                                            <span key={wIdx} className="overflow-hidden inline-flex mr-1 rtl:mr-0 rtl:ml-1 drop-shadow-sm">
                                                <motion.span
                                                    variants={{
                                                        hidden: { y: "100%" },
                                                        visible: { y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
                                                    }}
                                                >
                                                    {word}
                                                </motion.span>
                                            </span>
                                        ))}
                                    </h3>
                                    <motion.p
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="text-muted-foreground font-light text-sm md:text-base leading-relaxed"
                                    >
                                        {block.desc}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full aspect-[4/5] bg-muted overflow-hidden"
                        >
                            <Image
                                src="/images/dental_chair.png"
                                alt="Luxury Dental Chair"
                                fill
                                className="object-cover object-center grayscale contrast-125"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
