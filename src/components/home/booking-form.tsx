'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, Stethoscope, Sparkles, AlertCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BookingForm() {
    const locale = useLocale();
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        treatment: '',
        urgency: '',
        name: '',
        phone: '',
        date: ''
    });

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const treatments = [
        { id: 'implants', icon: <Stethoscope className="w-5 h-5 mb-2" />, label: locale === 'he' ? 'שתלים דנטליים' : 'زراعة الأسنان' },
        { id: 'aesthetic', icon: <Sparkles className="w-5 h-5 mb-2" />, label: locale === 'he' ? 'אסתטיקה וציפויים' : 'تجميل وقشور' },
        { id: 'pain', icon: <AlertCircle className="w-5 h-5 mb-2" />, label: locale === 'he' ? 'עזרה ראשונה / כאב' : 'إسعافات أولية' },
        { id: 'consult', icon: <Calendar className="w-5 h-5 mb-2" />, label: locale === 'he' ? 'ייעוץ כללי' : 'استشارة عامة' },
    ];

    return (
        <div className="w-full max-w-lg mx-auto bg-black border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4].map(s => (
                    <div key={s} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${s <= step ? 'bg-white' : 'bg-white/20'}`} />
                ))}
            </div>

            <AnimatePresence mode="wait">

                {/* STEP 1: Treatment */}
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: locale === 'he' ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: locale === 'he' ? 20 : -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="text-2xl text-white font-medium tracking-tight">
                            {locale === 'he' ? 'באיזה טיפול תתעניין/י?' : 'ما هو العلاج الذي تبحث عنه؟'}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {treatments.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => { setFormData({ ...formData, treatment: t.id }); nextStep(); }}
                                    className={`flex flex-col items-center justify-center p-6 border transition-all duration-300 ${formData.treatment === t.id ? 'border-white bg-white/10 text-white' : 'border-white/10 text-white/50 hover:border-white/50'} focus:outline-none`}
                                >
                                    {t.icon}
                                    <span className="text-sm font-medium text-center">{t.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* STEP 2: Urgency */}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: locale === 'he' ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: locale === 'he' ? 20 : -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="text-2xl text-white font-medium tracking-tight">
                            {locale === 'he' ? 'מתי תרצה/י לקבוע?' : 'متى ترغب في الحجز؟'}
                        </h3>
                        <div className="flex flex-col gap-3">
                            {[
                                { id: 'asap', label: locale === 'he' ? 'הקדם האפשרי' : 'في أقرب وقت ممكن' },
                                { id: 'this_week', label: locale === 'he' ? 'במהלך השבוע הקרוב' : 'خلال هذا الأسبوع' },
                                { id: 'flexible', label: locale === 'he' ? 'גמיש' : 'مرن' }
                            ].map(u => (
                                <button
                                    key={u.id}
                                    onClick={() => { setFormData({ ...formData, urgency: u.id }); nextStep(); }}
                                    className={`text-start p-4 border transition-all duration-300 font-medium ${formData.urgency === u.id ? 'border-white bg-white/10 text-white' : 'border-white/10 text-white/50 hover:border-white/50'} focus:outline-none`}
                                >
                                    {u.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* STEP 3: Details */}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: locale === 'he' ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: locale === 'he' ? 20 : -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="text-2xl text-white font-medium tracking-tight mb-2">
                            {locale === 'he' ? 'פרטים ליצירת קשר' : 'تفاصيل الاتصال'}
                        </h3>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/50">{locale === 'he' ? 'שם מלא' : 'الاسم الكامل'}</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/50">{locale === 'he' ? 'טלפון' : 'رقم الهاتف'}</label>
                                <input
                                    type="tel"
                                    dir="ltr"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-right md:text-left"
                                />
                            </div>
                        </div>

                        <Button
                            onClick={nextStep}
                            disabled={!formData.name || !formData.phone}
                            className="mt-4 bg-white text-black hover:bg-white/90 h-14 rounded-none font-semibold disabled:opacity-50"
                        >
                            {locale === 'he' ? 'המשך' : 'متابعة'}
                        </Button>
                    </motion.div>
                )}

                {/* STEP 4: Success/Completion */}
                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center text-center py-10 gap-4"
                    >
                        <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center mb-4">
                            <Check className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl text-white font-bold tracking-tight">
                            {locale === 'he' ? 'הפנייה התקבלה' : 'تم استلام الطلب'}
                        </h3>
                        <p className="text-white/60 font-light">
                            {locale === 'he'
                                ? 'אנו ניצור איתך קשר בשעות הקרובות לתיאום סופי.'
                                : 'سنتصل بك في الساعات القليلة القادمة للتنسيق النهائي.'}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Footer */}
            {step > 1 && step < 4 && (
                <div className="mt-8 flex justify-between absolute bottom-6 w-[calc(100%-3rem)] md:w-[calc(100%-5rem)]">
                    <button
                        onClick={prevStep}
                        className="text-white/50 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors outline-none"
                    >
                        {locale === 'he' ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                        {locale === 'he' ? 'חזור' : 'العودة'}
                    </button>
                </div>
            )}

        </div>
    );
}
