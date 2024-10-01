import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
    if (!routing.locales.includes(locale as Locale)) notFound();

    return {
        messages: (await import(`../../translations/${locale}.json`)).default
    };
});