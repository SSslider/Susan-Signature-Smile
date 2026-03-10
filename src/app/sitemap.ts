import { MetadataRoute } from 'next';

const DOMAIN = 'https://susan-smile.co.il';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${DOMAIN}/he`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${DOMAIN}/ar`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${DOMAIN}/he/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${DOMAIN}/ar/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${DOMAIN}/he/accessibility`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${DOMAIN}/ar/accessibility`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];
}
