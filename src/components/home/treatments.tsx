'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Plus, ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';

export function Treatments() {
    const locale = useLocale();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const treatments = [
        {
            title: locale === 'he' ? 'הלבנת שיניים' : 'تبييض الأسنان',
            subtitle: locale === 'he' ? 'החל מ-1500 ₪' : 'تبدأ من 1500 ش.ج',
            desc: locale === 'he'
                ? 'התהליך כולל הנחת ג׳ל הלבנה מקצועי והפעלתו בעזרת מנורת LED מיוחדת. מסיר כתמים עמוקים שנגרמו על ידי קפה, יין או עישון - ללא פגיעה באמייל.'
                : 'تتضمن العملية تطبيق جل تبييض احترافي وتنشيطه باستخدام مصباح LED خاص.',
            image: '/images/treatment_whitening.png'
        },
        {
            title: locale === 'he' ? 'שתלים דנטליים' : 'زراعة الأسنان',
            subtitle: locale === 'he' ? 'החל מ-3500 ₪' : 'تبدأ من 3500 ش.ج',
            desc: locale === 'he'
                ? 'שיחזור פה מלא ביום אחד בטכנולוגיית סריקה 3D המדויקת ביותר, המעניקה תוצאות אסתטיות ופונקציונליות מושלמות לאורך עשרות שנים.'
                : 'إعادة بناء الفم بالكامل في يوم واحد بتقنية مسح 3D.',
            image: '/images/treatment_implants.png'
        },
        {
            title: locale === 'he' ? 'ציפויי חרסינה ולמינירס' : 'قشور الخزف والفينير',
            subtitle: locale === 'he' ? 'החל מ-2500 ₪ לציפוי' : 'تبدأ من 2500 ش.ج',
            desc: locale === 'he'
                ? 'עיצוב חיוך מושלם ולבן בעזרת חומרי הפרימיום בעולם. עמידות יוצאת דופן להכתמה וחוזק ברמת המקצועיות העליונה.'
                : 'تصميم ابتسامة مثالية وأبيض مع مواد فاخرة.',
            image: '/images/treatment_veneers.png'
        },
        {
            title: locale === 'he' ? 'אורתודונטיה' : 'تقويم الأسنان',
            subtitle: locale === 'he' ? 'החל מ-9000 ₪' : 'تبدأ من 9000 ش.ج',
            desc: locale === 'he' ? 'יישור שיניים חבוי (אינוויזיליין) שקוף ומדויק, מאפשר המשך שגרת חיים ללא פשרות באסתטיקה או בנוחות.' : 'تقويم أسنان شفاف ودقيق، بدون تنازلات.',
            image: '/images/gloved_hand.png'
        },
        {
            title: locale === 'he' ? 'טיפולי שורש' : 'علاج العصب',
            subtitle: locale === 'he' ? 'החל מ-1200 ₪' : 'تبدأ من 1200 ش.ج',
            desc: locale === 'he' ? 'טיפול שורש תחת מיקרוסקופ לדיוק מרבי, ללא כאב ולשמירה אופטימלית על מבנה השן הטבעית לאורך זמן.' : 'علاج عصب مجهري دقيق ومريح، لضمان الحفاظ على السن الطبيعي.',
            image: '/images/treatment_root_canal.png'
        }
    ];

    return (
        <section id="treatments" className="py-24 md:py-32 bg-black text-white relative">
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-2">
                            {locale === 'he' ? 'טיפולים' : 'علاجات'}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/3 text-white/50 font-light text-sm md:text-base leading-relaxed"
                    >
                        {locale === 'he'
                            ? 'כל טיפול מותאם אישית הוא השקעה בבריאות ובאסתטיקה שלך. אנו מספקים תוצאות שלא רק מרפאות — אלא מרשימות.'
                            : 'كل علاج مخصص هو استثمار في صحتك وجمالك. نحن نقدم نتائج لا تشفي فحسب - بل تبهر.'}
                    </motion.div>
                </div>

                {/* Desktop: Centered List expands into Split Layout */}
                <div className="hidden lg:flex flex-row overflow-hidden bg-black min-h-[550px] relative justify-center" dir="ltr">

                    {/* Horizontal Content Area (opens to the left side) */}
                    <AnimatePresence>
                        {expandedIndex !== null && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: '66.666667%', opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative bg-black flex overflow-hidden border-y border-white/20 border-r border-white/20 rtl:border-r-0 rtl:border-l rounded-sm"
                                dir={locale === 'he' ? 'rtl' : locale === 'ar' ? 'rtl' : 'ltr'}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={expandedIndex}
                                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.2 } }}
                                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                                        className="absolute inset-0 flex flex-row w-full h-full"
                                    >
                                        {/* Horizontal Image Left */}
                                        <div className="w-1/2 h-full relative overflow-hidden flex-shrink-0 border-r border-white/10 rtl:border-l rtl:border-r-0">
                                            <Image
                                                src={treatments[expandedIndex].image}
                                                alt={treatments[expandedIndex].title}
                                                fill
                                                className="object-cover grayscale mix-blend-screen contrast-[1.15]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />
                                        </div>

                                        {/* Horizontal Content Right */}
                                        <div className="w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center gap-6 md:gap-8 relative z-10 bg-black/40 h-full">
                                            <div>
                                                <h4 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-3 lg:mb-4">
                                                    {treatments[expandedIndex].title}
                                                </h4>
                                                <span className="text-blue-400 text-sm lg:text-base font-medium tracking-widest uppercase">
                                                    {treatments[expandedIndex].subtitle}
                                                </span>
                                            </div>

                                            <p className="text-white/70 font-light leading-relaxed text-sm lg:text-lg max-w-sm">
                                                {treatments[expandedIndex].desc}
                                            </p>

                                            <Link
                                                href="#contact"
                                                className="mt-4 lg:mt-6 border border-white/30 rounded-full px-8 py-3 lg:py-4 lg:px-10 inline-flex items-center justify-center gap-3 text-sm lg:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors w-fit group/btn"
                                            >
                                                {locale === 'he' ? 'לייעוץ אישי' : 'استشارة شخصية'}
                                                <ArrowDownLeft className="w-4 h-4 rtl:-scale-x-100 group-hover/btn:translate-y-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Vertical Navigation Cards */}
                    <motion.div
                        initial={false}
                        animate={{
                            width: expandedIndex === null ? '60%' : '33.333333%',
                            marginLeft: expandedIndex === null ? '0%' : (locale === 'ltr' ? '0%' : 'auto'),
                            marginRight: expandedIndex === null ? '0%' : (locale === 'ltr' ? 'auto' : '0%')
                        }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col border border-white/20 rounded-sm z-20 bg-black shrink-0 relative overflow-hidden"
                        dir={locale === 'he' ? 'rtl' : locale === 'ar' ? 'rtl' : 'ltr'}
                    >
                        {treatments.map((item, index) => {
                            const isOpen = expandedIndex === index;

                            const handleTabClick = () => {
                                if (isOpen) {
                                    // If clicking the already open tab, just close it
                                    setExpandedIndex(null);
                                } else if (expandedIndex !== null) {
                                    // If another tab is open, close it first, wait for animation, then open new one
                                    setExpandedIndex(null);
                                    setTimeout(() => {
                                        setExpandedIndex(index);
                                    }, 800); // 800ms matches the exit transition duration
                                } else {
                                    // If no tab is open, just open it
                                    setExpandedIndex(index);
                                }
                            };

                            return (
                                <div
                                    key={index}
                                    onClick={handleTabClick}
                                    className={`
                                        flex-1 flex justify-between items-center p-8 border-b last:border-b-0 border-white/20 
                                        cursor-pointer transition-all duration-500
                                        ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'}
                                    `}
                                >
                                    {/* Active State Indicator Bar */}
                                    <div className={`absolute left-0 rtl:left-auto rtl:right-0 top-0 bottom-0 w-1 bg-blue-500 transition-transform duration-500 origin-bottom ${isOpen ? 'scale-y-100' : 'scale-y-0'}`} />

                                    <div className="flex items-center gap-6">
                                        <span className={`text-xl font-light font-mono transition-colors ${isOpen ? 'text-blue-400' : 'text-white/20'}`}>0{index + 1}</span>
                                        <h3 className={`text-2xl font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/60'}`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className={`transition-transform duration-500 ${isOpen ? (locale === 'he' || locale === 'ar' ? '-rotate-90 text-white' : 'rotate-90 text-white') : 'text-white/30'}`}>
                                        <Plus className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Mobile: Standard Vertical Accordion */}
                <div className="flex lg:hidden flex-col border border-white/20 rounded-sm overflow-hidden bg-black">
                    {treatments.map((item, index) => {
                        const isOpen = expandedIndex === index;

                        return (
                            <div
                                key={index}
                                className={`
                                    relative flex flex-col border-b last:border-b-0 border-white/20 
                                    overflow-hidden transition-colors duration-500
                                    ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'}
                                `}
                            >
                                {/* Mobile Header */}
                                <div
                                    onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
                                    className="flex justify-between items-center p-6 cursor-pointer group"
                                >
                                    <h3 className={`text-xl font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <div className={`transition-transform duration-500 rounded-full border border-white/10 p-2 ${isOpen ? 'rotate-45 bg-white text-black' : 'text-white/50 group-hover:border-white/30 group-hover:text-white'}`}>
                                        <Plus className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Content Area (Vertical Expand) */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col w-full border-t border-white/10">
                                                <div className="w-full aspect-video relative overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover grayscale mix-blend-screen contrast-[1.15]"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                                </div>

                                                <div className="w-full p-6 flex flex-col justify-center gap-6 relative z-10 bg-black/40">
                                                    <div>
                                                        <h4 className="text-3xl font-semibold tracking-tight mb-2">
                                                            {item.title}
                                                        </h4>
                                                        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                                                            {item.subtitle}
                                                        </span>
                                                    </div>

                                                    <p className="text-white/70 font-light leading-relaxed text-sm">
                                                        {item.desc}
                                                    </p>

                                                    <Link
                                                        href="#contact"
                                                        className="mt-2 border border-white/30 rounded-full px-8 py-3 inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors w-fit group/btn"
                                                    >
                                                        {locale === 'he' ? 'לייעוץ אישי' : (locale === 'ar' ? 'استشارة شخصية' : 'Consultation')}
                                                        <ArrowDownLeft className="w-4 h-4 rtl:-scale-x-100 group-hover/btn:translate-y-0.5 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
