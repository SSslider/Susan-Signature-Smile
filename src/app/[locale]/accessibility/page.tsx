import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';

const content = {
    he: {
        title: 'הצהרת נגישות',
        lastUpdated: 'עודכן לאחרונה: מרץ 2026',
        intro: 'אנו במרפאת סוסאן (Susan Signature Smile) רואים חשיבות עליונה בהנגשת האתר לאנשים עם מוגבלויות, מתוך אמונה כי לכל אדם מגיע שוויון זכויות והזדמנויות. הושקעו מאמצים ומשאבים רבים כדי להפוך את האתר לנגיש, נוח וידידותי לכלל המשתמשים.',
        sections: [
            {
                title: 'רמת הנגישות',
                content: 'אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013. התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.'
            },
            {
                title: 'אמצעי נגישות באתר',
                content: 'באתר מופעל תפריט נגישות המאפשר לכם להתאים את תצוגת האתר:\n• שינוי ניגודיות (צבעים כהים, בהירים או מונוכרום)\n• הגדלה והקטנה של הגופן\n• הדגשת קישורים וניווט באמצעות המקלדת (מקש Tab ו-Enter)\n• התאמה לקוראי מסך ועצירת אנימציות'
            },
            {
                title: 'תקלות נגישות ופניות',
                content: 'אנו ממשיכים במאמצינו לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש קל ובטוח לכלל האוכלוסייה. אם נתקלתם בבעיית נגישות, או שיש לכם הצעה לשיפור, נשמח לשמוע מכם ולטפל בנושא בהקדם האפשרי.'
            },
            {
                title: 'פרטי רכז נגישות',
                content: 'לפניות בנושא נגישות ניתן לפנות אלינו:\nטלפון: 04-123-4567\nדוא"ל: contact@susan-smile.co.il\nכתובת המרפאה: רחוב דוגמה 1, חיפה'
            }
        ]
    },
    ar: {
        title: 'بيان إمكانية الوصول',
        lastUpdated: 'آخر تحديث: مارس 2026',
        intro: 'نحن في عيادة سوسان (Susan Signature Smile) نعتبر إتاحة الموقع للأشخاص ذوي الإعاقة أمراً في غاية الأهمية، انطلاقاً من إيماننا بأن الجميع يستحقون تكافؤ الحقوق والفرص. لقد تم استثمار الكثير من الجهد والموارد لجعل الموقع سهل الوصول ومريح وسهل الاستخدام لجميع المستخدمين.',
        sections: [
            {
                title: 'مستوى إمكانية الوصول',
                content: 'يفي هذا الموقع بمتطلبات أنظمة المساواة في الحقوق للأشخاص ذوي الإعاقة لعام 2013. تم إجراء تعديلات إمكانية الوصول وفقًا لتوصيات المعيار الإسرائيلي (5568) لإمكانية الوصول إلى محتوى الويب بمستوى AA ووثيقة WCAG 2.0 الدولية.'
            },
            {
                title: 'ميزات إمكانية الوصول في الموقع',
                content: 'يحتوي الموقع على قائمة إمكانية الوصول تسمح لك بتخصيص عرض الموقع:\n• تغيير التباين (ألوان داكنة، فاتحة أو أحادية اللون)\n• تكبير وتصغير الخط\n• تمييز الروابط والتنقل باستخدام لوحة المفاتيح (مفتاح Tab و Enter)\n• ملاءمة لقارئات الشاشة وإيقاف الرسوم المتحركة'
            },
            {
                title: 'مشاكل إمكانية الوصول والاستفسارات',
                content: 'نحن نواصل جهودنا لتحسين إمكانية الوصول إلى الموقع كجزء من التزامنا بالسماح بالاستخدام السهل والآمن لجميع السكان. إذا واجهت مشكلة في إمكانية الوصول، أو كان لديك اقتراح للتحسين، يسعدنا أن نسمع منك ومعالجة المشكلة في أقرب وقت ممكن.'
            },
            {
                title: 'تفاصيل منسق إمكانية الوصول',
                content: 'للاستفسارات المتعلقة بإمكانية الوصول، يمكنك الاتصال بنا:\nالهاتف: 04-123-4567\nالبريد الإلكتروني: contact@susan-smile.co.il\nعنوان العيادة: شارع دوغما 1، حيفا'
            }
        ]
    }
};

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isHebrew = locale === 'he';

    return {
        title: isHebrew ? 'הצהרת נגישות | Susan Signature Smile' : 'بيان إمكانية الوصول | Susan Signature Smile',
        description: isHebrew
            ? 'הצהרת הנגישות של מרפאת הבוטיק Susan Signature Smile. אנו פועלים להנגשת השירותים שלנו בשקיפות לכלל הלקוחות.'
            : 'بيان إمكانية الوصول لعيادة سوسان سيجنتشر سمايل. نحن نعمل على إتاحة خدماتنا بشفافية لجميع العملاء.',
    };
}

export default async function AccessibilityPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!locales.includes(locale as any)) {
        notFound();
    }

    const t = content[locale as keyof typeof content] || content.he;

    return (
        <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                <p className="text-white/50">{t.lastUpdated}</p>
            </div>

            <div className="mb-12 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                    {t.intro}
                </p>
            </div>

            <div className="space-y-12">
                {t.sections.map((section, index) => (
                    <section key={index} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white/90">{section.title}</h2>
                        <div className="text-white/70 leading-relaxed text-lg whitespace-pre-line">
                            {section.content}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
