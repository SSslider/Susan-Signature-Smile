'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function Faq() {
    const locale = useLocale();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: locale === 'he' ? 'האם ניתן לסיים השתלת שיניים ביום אחד?' : 'هل يمكن إتمام زراعة الأسنان في يوم واحد؟',
            a: locale === 'he'
                ? 'כן. בעזרת הטכנולוגיה המתקדמת שלנו לסריקה ותכנון 3D, אנו מציעים לעיתים קרובות פתרונות של השתלה והעמסה מיידית, כך שתוכל לצאת עם חיוך חדש באותו היום.'
                : 'نعم. بفضل تقنيتنا المتقدمة 3D، نقدم غالباً حلولاً للزراعة والتحميل الفوري، مما يتيح لك الخروج بابتسامة جديدة في نفس اليوم.'
        },
        {
            q: locale === 'he' ? 'האם טיפולי השיניים במרפאה כואבים?' : 'هل علاجات الأسنان في العيادة مؤلمة؟',
            a: locale === 'he'
                ? 'אנו דוגלים ברפואת שיניים נטולת כאב. אנו משתמשים בחומרי אלחוש מתקדמים ודואגים לאווירה מרגיעה, כדי להבטיח חוויית טיפול נינוחה ככל האפשר.'
                : 'نحن نؤمن بطب أسنان بدون ألم. نستخدم مواد تخدير متقدمة ونوفر جواً مهدئاً لضمان تجربة علاج مريحة قدر الإمكان.'
        },
        {
            q: locale === 'he' ? 'מהו זמן ההחלמה לאחר שיקום פה?' : 'ما هو وقت التعافي بعد تأهيل الفم؟',
            a: locale === 'he'
                ? 'זמני ההחלמה משתנים בהתאם למורכבות הטיפול. ברוב טיפולי האסתטיקה החזרה לשגרה היא מיידית. בטיפולים כירורגיים, אנו מספקים ליווי צמוד והנחיות מדויקות לימים שאחרי.'
                : 'تختلف أوقات التعافي حسب تعقيد العلاج. في معظم العلاجات التجميلية، العودة إلى الروتين تكون فورية.'
        },
        {
            q: locale === 'he' ? 'באילו אמצעי אבחון אתם משתמשים?' : 'ما هي وسائل التشخيص التي تستخدمونها؟',
            a: locale === 'he'
                ? 'המרפאה מצוידת בציוד החדיש ביותר, כולל סורקים אינטרה-אורליים לסריקה דיגיטלית ללא חומרי מידה, ומכשירי צילום פנורמי ו-CT (CBCT) מדויקים ובטוחים.'
                : 'العيادة مجهزة بأحدث المعدات، بما في ذلك الماسحات الضوئية الداخلية والتصوير البانورامي والتصوير المقطعي (CBCT) الدقيق والآمن.'
        }
    ];

    return (
        <section id="faq" className="py-24 md:py-32 bg-background border-t border-border relative z-10">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                        {locale === 'he' ? 'שאלות נפוצות.' : 'أسئلة شائعة.'}
                    </h2>
                </motion.div>

                <div className="flex flex-col border-t border-border">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="border-b border-border"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-start py-8 flex justify-between items-center group focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-medium tracking-tight pr-4 rtl:pr-0 rtl:pl-4">
                                    {faq.q}
                                </span>
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                                    {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-muted-foreground font-light leading-relaxed max-w-3xl">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
