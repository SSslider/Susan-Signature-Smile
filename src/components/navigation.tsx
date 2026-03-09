'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';

export function Navigation() {
    const locale = useLocale();
    const t = useTranslations('Index'); // Fallback translations
    const [isOpen, setIsOpen] = useState(false);

    // Dynamic Navigation translations
    const links = [
        { href: '#treatments', label: locale === 'he' ? 'טיפולים' : 'العلاجات' },
        { href: '#team', label: locale === 'he' ? 'הצוות' : 'الفريق' },
        { href: '#cases', label: locale === 'he' ? 'מקרים ותוצאות' : 'الحالات والنتائج' },
        { href: '#faq', label: locale === 'he' ? 'שאלות נפוצות' : 'أسئلة شائعة' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex flex-col">
                    <span className="font-bold text-xl md:text-2xl tracking-tight text-white leading-none">
                        Susan Signature
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                        Dental Clinic
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-6 w-px bg-white/10 mx-2" />
                    <LanguageSwitcher />
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 -mr-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/5 p-4 flex flex-col gap-4 shadow-xl">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-white/70 hover:text-white p-4 text-center rounded-md hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
