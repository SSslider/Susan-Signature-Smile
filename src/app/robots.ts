import { MetadataRoute } from 'next';

const DOMAIN = 'https://susan-smile.co.il';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'],
        },
        sitemap: `${DOMAIN}/sitemap.xml`,
    };
}
