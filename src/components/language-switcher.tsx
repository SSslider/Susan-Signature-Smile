'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === 'he' ? 'ar' : 'he';

        let newPath = pathname;

        if (locale === 'he') {
            newPath = `/ar${pathname === '/' ? '' : pathname}`;
        } else {
            newPath = pathname.replace(/^\/ar/, '') || '/';
        }

        // Force explicitly setting the cookie so Next-Intl doesn't redirect us back
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

        // Force a hard navigation to ensure locale is updated correctly
        window.location.href = newPath;
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="flex gap-2 items-center text-sm font-medium hover:bg-white/10"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4" />
            <span>{locale === 'he' ? 'العربية' : 'עברית'}</span>
        </Button>
    );
}
