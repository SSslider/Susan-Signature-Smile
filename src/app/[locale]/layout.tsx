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

export { metadata } from '@/lib/seo';

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

  return (
    <html lang={locale} dir={dir} className="dark scroll-smooth">
      <body className={`${poppins.variable} ${assistant.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col`}>
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
