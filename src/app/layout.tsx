import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Edik Krivovyaschuk - Fullstack Developer",
    description: "My name is Edik, I'm a developer with over 5 years of experience in building products using modern technologies like NodeJS (NestJS, ExpressJS), ReactJS (NextJS), Laravel, PostgreSQL, MySQL, Mongodb, Blockchain. Open for work and cooperation.",
};

const AppThemeProvider = dynamic(() => import("@/components/context/theme"), {
    ssr: false,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = cookies().get("__theme__")?.value || "system";

    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AppThemeProvider
                    attribute='class'
                    defaultTheme={theme}
                    enableSystem
                >
                    {children}
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
