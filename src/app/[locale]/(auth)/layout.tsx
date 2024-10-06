'use client'

import ThemeSwitcher from "@/components/partials/theme-switcher";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const t = useTranslations('auth.login');
    const router = useRouter();

    return (
        <div className='relative min-h-screen w-full p-5 flex items-center justify-center'>
            <div className='absolute top-5 left-5'>
                <Button
                    className='rounded-xl bg-timberwolf-mid-light dark:bg-eerie-mid-light hover:bg-timberwolf-light dark:hover:bg-eerie-light'
                    variant='ghost'
                    onClick={() => router.back()}
                >
                    <ArrowLeft className='w-4 h-4 mr-2' />
                    {t('buttons.back')}
                </Button>
            </div>
            <div className='absolute top-5 right-5'>
                <ThemeSwitcher />
            </div>
            <div className='flex-1 max-w-[400px]'>
                {children}
            </div>
        </div>
    );
}