import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const raleway = Montserrat({ subsets: ['cyrillic-ext', 'latin-ext'] })

export const metadata: Metadata = {
    title: "Edik Krivovyaschuk - Fullstack Developer",
    description: "My name is Edik, I'm a developer with over 5 years of experience in building products using modern technologies like NodeJS (NestJS, ExpressJS), ReactJS (NextJS), Laravel, PostgreSQL, MySQL, Mongodb, Blockchain. Open for work and cooperation.",
};

const AppThemeProvider = dynamic(() => import("@/components/context/theme"), {
    ssr: false,
});

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const theme = cookies().get("__theme__")?.value || "dark";

    return (
        <html lang={params.locale} >
            <body
                className={cn(
                    raleway.className,
                    // geistSans.variable,
                    // geistMono.variable,
                    'text-eerie-light dark:text-timberwolf',
                    'antialiased bg-timberwolf dark:bg-eerie bg-[radial-gradient(#C7CABA_1px,transparent_1px)] dark:bg-[radial-gradient(#3D3D3D8f_1px,transparent_1px)] [background-size:20px_20px]'
                )}
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
