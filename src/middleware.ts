import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
    locales,
    defaultLocale: 'he',
    localePrefix: 'as-needed',
});

export const config = {
    // Match only internationalized pathnames, excluding api, _next/static, _next/image, favicon.ico
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
