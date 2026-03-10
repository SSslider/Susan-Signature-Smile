import type { Metadata } from 'next';
import { Poppins, Assistant } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FloatingWidgets } from '@/components/floating-widgets';
import '../globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew'],
  weight: ['300', '400', '500', '600', '700'],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const siteUrl = 'https://susan-smile.co.il';

  const isHebrew = locale === 'he';

  const title = isHebrew
    ? 'Susan Signature Smile | ד"ר פאדי סוסאן | מרפאת מומחים לרפואת שיניים בחיפה'
    : 'Susan Signature Smile | د. فادي سوسان | عيادة أسنان متخصصة في حيفا';

  const description = isHebrew
    ? 'מרכז לרפואת שיניים מתקדמת בחיפה. אנו מציעים טיפולי שיניים, ציפויים, השתלות ואסתטיקה דנטלית ברמה הגבוהה ביותר עם טכנולוגיה חדשנית.'
    : 'مركز لطب الأسنان المتقدم في حيفا. نقدم علاجات الأسنان والقشور والزراعة وتجميل الأسنان على أعلى مستوى بأحدث التقنيات.';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s | Susan Signature Smile'
    },
    description: description,
    keywords: isHebrew
      ? ['רופא שיניים חיפה', 'מרפאת שיניים', 'ציפויי שיניים', 'השתלות שיניים', 'ד"ר פאדי סוסאן', 'Dental Clinic Haifa']
      : ['طبيب أسنان حيفا', 'عيادة أسنان', 'قشور الأسنان', 'زراعة الأسنان', 'د. فادي سوسان', 'Dental Clinic Haifa'],
    authors: [{ name: 'Dr. Fadi Susan', url: siteUrl }],
    creator: 'Susan Signature Smile',
    openGraph: {
      type: 'website',
      locale: isHebrew ? 'he_IL' : 'ar_IL',
      url: `${siteUrl}/${locale}`,
      siteName: 'Susan Signature Smile',
      title: title,
      description: description,
      images: [
        {
          url: '/images/hero_portrait_v35.png', // The optimized beautiful portrait
          width: 1200,
          height: 630,
          alt: 'Susan Signature Smile - Premium Dental Clinic',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/images/hero_portrait_v35.png'],
      creator: '@SusanSmileClinic',
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'he': `${siteUrl}/he`,
        'ar': `${siteUrl}/ar`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' || locale === 'he' ? 'rtl' : 'ltr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Susan Signature Smile',
    image: 'https://susan-smile.co.il/images/hero_portrait_v35.png',
    '@id': 'https://susan-smile.co.il',
    url: 'https://susan-smile.co.il',
    telephone: '04-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sderot Ben Gurion 12',
      addressLocality: 'Haifa',
      addressCountry: 'IL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.8191,
      longitude: 34.9983
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:00',
      closes: '20:00'
    }],
    sameAs: [
      'https://www.facebook.com/susan.signature.smile',
      'https://www.instagram.com/susan.signature.smile'
    ]
  };

  return (
    <html lang={locale} dir={dir} className="dark scroll-smooth">
      <body className={`${poppins.variable} ${assistant.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1 flex flex-col pt-20">
            {children}
          </main>
          <Footer />
          <FloatingWidgets />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
