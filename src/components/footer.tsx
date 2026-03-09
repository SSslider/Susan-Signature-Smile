import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black text-white py-16 md:py-24 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col col-span-1 md:col-span-2 space-y-4">
                    <Link href="/" className="flex flex-col w-fit">
                        <span className="font-bold text-2xl md:text-4xl tracking-tight leading-none">
                            Susan Signature
                        </span>
                        <span className="text-sm text-white/50 uppercase tracking-widest mt-2">
                            Dental Clinic
                        </span>
                    </Link>
                    <p className="text-white/60 max-w-sm mt-4 leading-relaxed font-light">
                        מרכז לרפואת שיניים מתקדמת, המקפיד על אסתטיקה ברמה הגבוהה ביותר, בסביבה מרגיעה ויוקרתית.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">ניווט</h4>
                    <Link href="#treatments" className="text-white/70 hover:text-white transition-colors w-fit">טיפולים</Link>
                    <Link href="#team" className="text-white/70 hover:text-white transition-colors w-fit">הצוות</Link>
                    <Link href="#cases" className="text-white/70 hover:text-white transition-colors w-fit">מקרים ותוצאות</Link>
                    <Link href="#faq" className="text-white/70 hover:text-white transition-colors w-fit">FAQ</Link>
                </div>

                <div className="flex flex-col space-y-4">
                    <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">יצירת קשר</h4>
                    <a href="tel:*9999" className="text-white/70 hover:text-white transition-colors w-fit flex items-center gap-1 group">
                        <ArrowUpRight className="w-4 h-4 opacity-0 rtl:-translate-x-1 ltr:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        04-123-4567
                    </a>
                    <a href="mailto:contact@susan-smile.co.il" className="text-white/70 hover:text-white transition-colors w-fit flex items-center gap-1 group">
                        <ArrowUpRight className="w-4 h-4 opacity-0 rtl:-translate-x-1 ltr:translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        contact@susan-smile.co.il
                    </a>
                    <div className="text-white/70 mt-4 leading-relaxed pt-4 border-t border-white/10">
                        רחוב דוגמה 1, חיפה<br />
                        א׳-ה׳ 09:00 - 18:00
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
                <p>&copy; {new Date().getFullYear()} Susan Signature Smile. כל הזכויות שמורות.</p>
                <div className="flex items-center gap-6">
                    <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">תנאי שימוש ופרטיות</Link>
                </div>
            </div>
        </footer>
    );
}
