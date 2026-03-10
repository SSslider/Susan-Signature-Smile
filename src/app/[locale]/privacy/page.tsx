import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';

const content = {
    he: {
        title: 'תנאי שימוש ופרטיות',
        lastUpdated: 'עודכן לאחרונה: מרץ 2026',
        sections: [
            {
                title: '1. מבוא',
                content: 'ברוכים הבאים לאתר מרפאת סוסאן (Susan Signature Smile). אתר זה משמש כאתר תדמית למרפאה. השימוש באתר כפוף לתנאים המפורטים להלן. עצם הגלישה והשימוש באתר מהווים את הסכמתך לתנאים אלו.'
            },
            {
                title: '2. איסוף מידע',
                content: 'אנו עשויים לאסוף מידע אישי המוגש על ידך מרצונך החופשי, כגון שם, מספר טלפון וכתובת דואר אלקטרוני, בעת מילוי טפסי יצירת הקשר באתר.'
            },
            {
                title: '3. שימוש במידע',
                content: 'המידע הנאסף משמש אך ורק למטרת יצירת קשר עמך, מתן מענה לתלונות, קביעת תורים ושיפור השירותים הניתנים על ידינו. לא נעביר את פרטיך לצדדים שלישיים ללא הסכמתך המפורשת.'
            },
            {
                title: '4. אבטחת מידע',
                content: 'אנו נוקטים באמצעי אבטחה מחמירים העומדים בסטנדרטים המקובלים, על מנת להגן על המידע המצוי בידינו מפני גישה, שימוש או חשיפה בלתי מורשים.'
            },
            {
                title: '5. זכויות יוצרים וקניין רוחני',
                content: 'כל הזכויות על התכנים, התמונות, העיצובים והסימנים המסחריים המופיעים באתר שייכות למרפאת סוסאן. אין להעתיק, לשכפל או להפיץ כל חלק מהאתר ללא אישור בכתב ומראש.'
            },
            {
                title: '6. יצירת קשר',
                content: 'לכל שאלה, בקשה להסרת מידע או פנייה בנושא פרטיות, ניתן ליצור עמנו קשר בכתובת הדוא"ל: contact@susan-smile.co.il או בטלפון: 04-123-4567.'
            }
        ]
    },
    ar: {
        title: 'شروط الاستخدام والخصوصية',
        lastUpdated: 'آخر تحديث: مارس 2026',
        sections: [
            {
                title: '1. مقدمة',
                content: 'مرحبًا بك في موقع عيادة سوسان (Susan Signature Smile). يستخدم هذا الموقع كموقع تعريفي للعيادة. يخضع استخدام الموقع للشروط الموضحة أدناه. مجرد تصفح الموقع واستخدامه يشكل موافقتك على هذه الشروط.'
            },
            {
                title: '2. جمع المعلومات',
                content: 'قد نقوم بجمع المعلومات الشخصية التي تقدمها طواعية، مثل الاسم ورقم الهاتف وعنوان البريد الإلكتروني، عند ملء نماذج الاتصال على الموقع.'
            },
            {
                title: '3. استخدام المعلومات',
                content: 'تُستخدم المعلومات التي تم جمعها حصريًا لغرض الاتصال بك، والرد على استفساراتك، وحجز المواعيد، وتحسين الخدمات التي نقدمها. لن نقوم بنقل بياناتك إلى أطراف ثالثة دون موافقتك الصريحة.'
            },
            {
                title: '4. أمن المعلومات',
                content: 'نتخذ إجراءات أمنية صارمة تتوافق مع المعايير المقبولة لحماية المعلومات الموجودة بحوزتنا من الوصول أو الاستخدام أو الكشف غير المصرح به.'
            },
            {
                title: '5. حقوق النشر والملكية الفكرية',
                content: 'جميع الحقوق المتعلقة بالمحتوى والصور والتصميمات والعلامات التجارية التي تظهر على الموقع مملوكة لعيادة سوسان. يُمنع نسخ أو إعادة إنتاج أو توزيع أي جزء من الموقع دون إذن كتابي مسبق.'
            },
            {
                title: '6. اتصل بنا',
                content: 'لأي أسئلة أو طلبات لإزالة المعلومات أو استفسارات تتعلق بالخصوصية، يمكنك الاتصال بنا على البريد الإلكتروني: contact@susan-smile.co.il أو عبر الهاتف: 04-123-4567.'
            }
        ]
    }
};

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isHebrew = locale === 'he';

    return {
        title: isHebrew ? 'תנאי שימוש ופרטיות | Susan Signature Smile' : 'شروط الاستخدام والخصوصية | Susan Signature Smile',
        description: isHebrew
            ? 'קראו את תנאי השימוש ומדיניות הפרטיות של מרפאת סוסאן. אנו מחויבים להגנה על המידע האישי שלכם.'
            : 'اقرأ شروط الاستخدام وسياسة الخصوصية لعيادة سوسان. نحن ملتزمون بحماية معلوماتك الشخصية.',
    };
}

export default async function PrivacyPage({
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

            <div className="space-y-12">
                {t.sections.map((section, index) => (
                    <section key={index} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white/90">{section.title}</h2>
                        <p className="text-white/70 leading-relaxed text-lg">
                            {section.content}
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}
