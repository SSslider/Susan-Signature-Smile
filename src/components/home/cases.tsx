'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Cases() {
    const locale = useLocale();

    const caseStudies = [
        {
            id: 1,
            diagnosis: locale === 'he' ? 'שחיקת שיניים חמורה ואובדן מימד אנכי.' : 'تآكل شديد في الأسنان وفقدان البعد العمودي.',
            treatment: locale === 'he' ? 'שיקום הפה המלא באמצעות כתרי זירקוניה והעלאת מנשך.' : 'إعادة تأهيل الفم بالكامل باستخدام تيجان الزركونيا.',
            result: locale === 'he' ? 'חיוך אסתטי, פונקציונליות מלאה ומראה צעיר.' : 'ابتسامة جمالية، وظائف كاملة ومظهر شاب.',
        },
        {
            id: 2,
            diagnosis: locale === 'he' ? 'חוסר של מספר שיניים קדמיות ואסתטיקה לקויה.' : 'فقدان عدد من الأسنان الأمامية وضعف في الجماليات.',
            treatment: locale === 'he' ? 'השתלות דנטליות ממוחשבות ותותבות נתמכות שתלים.' : 'زراعة أسنان محوسبة وأطراف صناعية مدعومة بالزرع.',
            result: locale === 'he' ? 'שחזור מושלם של קו החיוך והביטחון העצמי.' : 'استعادة مثالية لخط الابتسامة والثقة بالنفس.',
        }
    ];

    return (
        <section id="cases" className="py-24 md:py-32 bg-black text-white relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                            {locale === 'he' ? 'תוצאות.' : 'نتائج.'}<br />
                            <span className="text-white/40">{locale === 'he' ? 'מדברות בעד עצמן.' : 'تتحدث عن نفسها.'}</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {caseStudies.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
                        >
                            {/* Before/After Custom UI */}
                            <div className="w-full lg:w-1/2 aspect-video relative overflow-hidden group flex bg-black border border-white/10" dir="ltr">
                                <div className="w-1/2 h-full border-r border-white/20 relative overflow-hidden flex items-center justify-center">
                                    <Image src={`/images/case${item.id}_before.png`} alt="Before" fill className="object-cover opacity-80 mix-blend-screen grayscale contrast-125 focus:scale-105" />
                                    <span className="text-white bg-black/50 px-2 py-1 uppercase tracking-widest text-[10px] font-medium absolute top-4 left-4 z-10 rounded">Before</span>
                                </div>
                                <div className="w-1/2 h-full relative overflow-hidden flex items-center justify-center">
                                    <Image src={`/images/case${item.id}_after.png`} alt="After" fill className="object-cover mix-blend-screen grayscale contrast-125 focus:scale-105" />
                                    <span className="text-white bg-black/50 px-2 py-1 uppercase tracking-widest text-[10px] font-medium absolute top-4 left-4 z-10 rounded">After</span>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Case 0{item.id}</span>

                                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                                    <span className="text-white/40 text-xs tracking-widest uppercase">{locale === 'he' ? 'אבחון' : 'التشخيص'}</span>
                                    <p className="text-lg font-medium">{item.diagnosis}</p>
                                </div>

                                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                                    <span className="text-white/40 text-xs tracking-widest uppercase">{locale === 'he' ? 'טיפול' : 'العلاج'}</span>
                                    <p className="text-white/70 font-light">{item.treatment}</p>
                                </div>

                                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                                    <span className="text-white/40 text-xs tracking-widest uppercase">{locale === 'he' ? 'תוצאה' : 'النتيجة'}</span>
                                    <p className="text-white/90">{item.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white/30 text-xs uppercase tracking-widest">
                        * {locale === 'he' ? 'המידע בדף זה הינו כללי ואינו מחליף ייעוץ רפואי פרטני. התוצאות משתנות ממטופל למטופל.' : 'المعلومات الواردة في هذه الصفحة عامة ولا تحل محل الاستشارة الطبية.'}
                    </p>
                </div>

            </div>
        </section>
    );
}
