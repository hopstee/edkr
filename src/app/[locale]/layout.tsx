import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const raleway = Montserrat({ subsets: ['cyrillic-ext', 'latin-ext'] })

const APP_NAME = 'Edik Krivovyaschuk'
const APP_DEFAULT_TITLE = 'Edik Krivovyaschuk - Fullstack Developer'
const APP_TITLE_TEMPLATE = '%s - Portfolio'
const APP_DESCRIPTION = 'My name is Edik, I\'m a developer with over 5 years of experience in building products using modern technologies like NodeJS (NestJS, ExpressJS), ReactJS (NextJS), Laravel, PostgreSQL, MySQL, Mongodb, Blockchain. Open for work and cooperation.'

export const metadata: Metadata = {
    description: APP_DESCRIPTION,
    icons: '/favicon.ico',
    manifest: '/manifest.json',
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: APP_DEFAULT_TITLE,
        startupImage: 'favicons/apple-touch-icon.png',
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: 'website',
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: 'summary',
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};

const AppThemeProvider = dynamic(() => import("@/components/context/theme"), {
    ssr: false,
});

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    unstable_setRequestLocale(params.locale);

    const messages = await getMessages()

    const theme = cookies().get("__theme__")?.value || "system";

    return (
        <html lang={params.locale}>
            <head>
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
                />
            </head>
            <body
                className={cn(
                    raleway.className,
                    'text-alter-light dark:text-main',
                    'antialiased bg-main dark:bg-alter bg-[radial-gradient(#C7CABA_1px,transparent_1px)] dark:bg-[radial-gradient(#3D3D3D8f_1px,transparent_1px)] [background-size:20px_20px]'
                )}
            >
                <AppThemeProvider
                    attribute='class'
                    defaultTheme={theme}
                    enableSystem
                >
                    <NextIntlClientProvider messages={messages}>
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </NextIntlClientProvider>
                </AppThemeProvider>

                <NextTopLoader
                    color='#2299DD'
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing='ease'
                    speed={200}
                    shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                    zIndex={1600}
                    showAtBottom={false}
                />
            </body>
        </html>
    );
}
