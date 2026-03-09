import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Susan Signature Smile | Dr. Fadi Susan',
    description: 'Premium Dental Clinic in Israel - Dr. Fadi Susan',
    openGraph: {
        title: 'Susan Signature Smile | Dr. Fadi Susan',
        description: 'מרכז לרפואת שיניים מתקדמת, המקפיד על אסתטיקה ברמה הגבוהה ביותר, בסביבה מרגיעה ויוקרתית.',
        url: 'https://susan-smile.co.il',
        siteName: 'Susan Signature Smile',
        images: [
            {
                url: '/images/hero_portrait.png',
                width: 1200,
                height: 630,
                alt: 'Susan Signature Smile Clinic',
            },
        ],
        locale: 'he_IL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Susan Signature Smile',
        description: 'Premium Dental Clinic',
        images: ['/images/hero_portrait.png'],
    },
    alternates: {
        canonical: 'https://susan-smile.co.il',
        languages: {
            'he-IL': 'https://susan-smile.co.il/he',
            'ar-IL': 'https://susan-smile.co.il/ar',
        },
    },
};
