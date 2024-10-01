import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
    locales: ['en', 'ru'],
    defaultLocale: 'en',
});

export default middleware;

export const config = {
    matcher: ['/', '/(ru|en)/:page*'],
};