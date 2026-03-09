'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Accessibility, Send, Eye, Type, Contrast, MonitorPlay, Link2, RotateCcw, ArrowDownRight } from 'lucide-react';

export function FloatingWidgets() {
    const locale = useLocale();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [a11yMenuOpen, setA11yMenuOpen] = useState(false);

    // A11y States
    const [a11ySettings, setA11ySettings] = useState({
        fontSize: 100, // percentage
        highContrast: false,
        lightMode: false,
        highlightLinks: false,
        highlightTitles: false,
        readableFont: false,
        dyslexicFont: false,
        stopAnimations: false,
        largeCursor: false,
    });

    const [messages, setMessages] = useState<{ role: 'bot' | 'user', content: string }[]>([
        { role: 'bot', content: locale === 'he' ? 'שלום! שמי לין, האסיסטנטית החכמה של סוסאן סמייל. איך אוכל לעזור היום?' : 'مرحباً! أنا لين المساعدة الذكية لعيادة سوسان سمايل. كيف يمكنني مساعدتك؟' }
    ]);
    const [inputVal, setInputVal] = useState('');

    // Apply A11y effects to the document
    useEffect(() => {
        document.documentElement.style.fontSize = `${a11ySettings.fontSize}%`;

        if (a11ySettings.highContrast) document.documentElement.classList.add('a11y-high-contrast');
        else document.documentElement.classList.remove('a11y-high-contrast');

        if (a11ySettings.lightMode) document.documentElement.classList.add('a11y-light-mode');
        else document.documentElement.classList.remove('a11y-light-mode');

        if (a11ySettings.highlightLinks) document.documentElement.classList.add('a11y-highlight-links');
        else document.documentElement.classList.remove('a11y-highlight-links');

        if (a11ySettings.highlightTitles) document.documentElement.classList.add('a11y-highlight-titles');
        else document.documentElement.classList.remove('a11y-highlight-titles');

        if (a11ySettings.readableFont) document.documentElement.classList.add('a11y-readable-font');
        else document.documentElement.classList.remove('a11y-readable-font');

        if (a11ySettings.dyslexicFont) document.documentElement.classList.add('a11y-dyslexic-font');
        else document.documentElement.classList.remove('a11y-dyslexic-font');

        if (a11ySettings.stopAnimations) document.documentElement.classList.add('a11y-stop-animations');
        else document.documentElement.classList.remove('a11y-stop-animations');

        if (a11ySettings.largeCursor) document.documentElement.classList.add('a11y-large-cursor');
        else document.documentElement.classList.remove('a11y-large-cursor');

    }, [a11ySettings]);

    const handleSend = async () => {
        if (!inputVal.trim()) return;
        const newMessages = [...messages, { role: 'user' as const, content: inputVal }];
        setMessages(newMessages);
        setInputVal('');
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages, locale })
            });
            const data = await res.json();
            setMessages(prev => [...prev, data]);
        } catch (err) {
            setMessages(prev => [...prev, { role: 'bot', content: locale === 'he' ? 'אירעה שגיאה בחיבור לשרת.' : 'انقطع الاتصال.' }]);
        }
    };

    const a11yOptions = [
        {
            id: 'fontSizeUp',
            icon: <Type className="w-4 h-4" />,
            label: locale === 'he' ? 'הגדל טקסט' : 'تكبير النص',
            action: () => setA11ySettings(prev => ({ ...prev, fontSize: prev.fontSize < 150 ? prev.fontSize + 10 : prev.fontSize }))
        },
        {
            id: 'fontSizeDown',
            icon: <Type className="w-3 h-3" />,
            label: locale === 'he' ? 'הקטן טקסט' : 'تصغير النص',
            action: () => setA11ySettings(prev => ({ ...prev, fontSize: prev.fontSize > 90 ? prev.fontSize - 10 : prev.fontSize }))
        },
        {
            id: 'highContrast',
            icon: <Contrast className="w-4 h-4" />,
            label: locale === 'he' ? 'ניגודיות גבוהה' : 'تباين عالي',
            action: () => setA11ySettings(prev => ({ ...prev, highContrast: !prev.highContrast, lightMode: false })),
            active: a11ySettings.highContrast
        },
        {
            id: 'lightMode',
            icon: <Eye className="w-4 h-4" />,
            label: locale === 'he' ? 'רקע בהיר' : 'خلفية فاتحة',
            action: () => setA11ySettings(prev => ({ ...prev, lightMode: !prev.lightMode, highContrast: false })),
            active: a11ySettings.lightMode
        },
        {
            id: 'highlightLinks',
            icon: <Link2 className="w-4 h-4" />,
            label: locale === 'he' ? 'הדגשת קישורים' : 'تمييز الروابط',
            action: () => setA11ySettings(prev => ({ ...prev, highlightLinks: !prev.highlightLinks })),
            active: a11ySettings.highlightLinks
        },
        {
            id: 'readableFont',
            icon: <Eye className="w-4 h-4" />,
            label: locale === 'he' ? 'פונט קריא' : 'خط مقروء',
            action: () => setA11ySettings(prev => ({ ...prev, readableFont: !prev.readableFont })),
            active: a11ySettings.readableFont
        },
        {
            id: 'stopAnimations',
            icon: <MonitorPlay className="w-4 h-4" />,
            label: locale === 'he' ? 'עצירת אנימציות' : 'إيقاف التحريك',
            action: () => setA11ySettings(prev => ({ ...prev, stopAnimations: !prev.stopAnimations })),
            active: a11ySettings.stopAnimations
        },
        {
            id: 'highlightTitles',
            icon: <Type className="w-4 h-4 font-bold" />,
            label: locale === 'he' ? 'הדגשת כותרות' : 'تمييز العناوين',
            action: () => setA11ySettings(prev => ({ ...prev, highlightTitles: !prev.highlightTitles })),
            active: a11ySettings.highlightTitles
        },
        {
            id: 'dyslexicFont',
            icon: <Type className="w-4 h-4 text-blue-500" />,
            label: locale === 'he' ? 'פונט לדיסלקטים' : 'خط للمصابين بعسر القراءة',
            action: () => setA11ySettings(prev => ({ ...prev, dyslexicFont: !prev.dyslexicFont })),
            active: a11ySettings.dyslexicFont
        },
        {
            id: 'largeCursor',
            icon: <ArrowDownRight className="w-4 h-4 -rotate-45" />,
            label: locale === 'he' ? 'סמן גדול' : 'مؤشر كبير',
            action: () => setA11ySettings(prev => ({ ...prev, largeCursor: !prev.largeCursor })),
            active: a11ySettings.largeCursor
        },
    ];

    return (
        <>
            {/* Accessibility Widget - Right side (start in RTL) */}
            <div className="fixed bottom-6 start-6 z-50 flex flex-col gap-4 items-start">
                <AnimatePresence>
                    {a11yMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-background border border-border shadow-2xl p-6 rounded-2xl w-[320px] md:w-[350px] mb-2 origin-bottom-left"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <Accessibility className="w-5 h-5" />
                                    <h3 className="font-semibold">{locale === 'he' ? 'תפריט נגישות' : 'إعدادات الوصول'}</h3>
                                </div>
                                <button onClick={() => setA11yMenuOpen(false)}><X className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /></button>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm text-foreground/80 mb-6">
                                {a11yOptions.map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={opt.action}
                                        className={`flex flex-col items-center justify-center gap-2 p-3 border rounded-xl transition-colors text-center ${opt.active ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-muted border-border'}`}
                                    >
                                        {opt.icon}
                                        <span className="text-xs leading-tight">{opt.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <button
                                    onClick={() => setA11ySettings({ fontSize: 100, highContrast: false, lightMode: false, highlightLinks: false, highlightTitles: false, readableFont: false, dyslexicFont: false, stopAnimations: false, largeCursor: false })}
                                    className="flex items-center gap-2 text-xs font-medium text-destructive hover:text-destructive/80 transition-colors"
                                >
                                    <RotateCcw className="w-3 h-3" />
                                    {locale === 'he' ? 'אפס הגדרות' : 'إعادة تعيين'}
                                </button>
                                <a href={locale === 'he' ? '/accessibility' : `/${locale}/accessibility`} className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4">
                                    {locale === 'he' ? 'הצהרת נגישות' : 'بيان إمكانية الوصول'}
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => { setA11yMenuOpen(!a11yMenuOpen); setIsChatOpen(false); }}
                    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-105 transition-all"
                    aria-label="Accessibility Settings"
                >
                    <Accessibility className="w-5 h-5" />
                </button>
            </div>

            {/* Chatbot Widget - Left side (end in RTL) */}
            <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-4 items-end">
                <AnimatePresence>
                    {isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-background border border-border shadow-2xl rounded-2xl w-[340px] md:w-[400px] h-[550px] mb-2 flex flex-col overflow-hidden origin-bottom-right"
                        >
                            {/* Header */}
                            <div className="bg-foreground text-background p-5 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center font-bold text-lg">L</div>
                                    <div>
                                        <h3 className="font-semibold leading-tight">{locale === 'he' ? 'לין - אסיסטנטית חכמה' : 'لين - مساعدة'}</h3>
                                        <p className="text-xs opacity-70 mt-0.5">{locale === 'he' ? 'זמינה 24/7' : 'متاح 24/7'}</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsChatOpen(false)}><X className="w-6 h-6 text-background/70 hover:text-background transition-colors" /></button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-[#F5F5F5] dark:bg-black/50">
                                {messages.map((m, i) => (
                                    <div key={i} className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${m.role === 'bot' ? 'bg-white dark:bg-[#1A1A1A] text-foreground self-start rounded-2xl rounded-tl-sm rtl:rounded-tr-sm rtl:rounded-tl-2xl border border-border' : 'bg-foreground text-background self-end rounded-2xl rounded-tr-sm rtl:rounded-tl-sm rtl:rounded-tr-2xl'}`}>
                                        {m.content.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
                                    </div>
                                ))}
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-border flex items-center gap-3 bg-background">
                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={e => setInputVal(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                                    placeholder={locale === 'he' ? 'הקלד/י כאן...' : 'اكتب هنا...'}
                                    className="flex-1 bg-muted p-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                                />
                                <button onClick={handleSend} className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-md">
                                    <Send className="w-4 h-4 -md:ml-0.5 rtl:ml-0 rtl:-mr-0.5 rtl:scale-x-[-1]" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => { setIsChatOpen(!isChatOpen); setA11yMenuOpen(false); }}
                    className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
                    aria-label="Open Chat"
                >
                    {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
                </button>
            </div>
        </>
    );
}
