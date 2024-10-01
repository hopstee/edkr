"use client"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";

import useMediaQuery from "@/hooks/useMediaQuery";
import { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface LanguageItem {
    id: number;
    code: Locale;
}

const mockData: LanguageItem[] = [
    {
        id: 1,
        code: 'en',
    },
    {
        id: 2,
        code: 'ru',
    },
]

interface LanguageItemProps {
    code: Locale;
    handleChangeLang: (code: Locale) => void;
    currentLang: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ code, handleChangeLang, currentLang }) => {
    const t = useTranslations('common.langs')

    return (
        <div
            onClick={() => handleChangeLang(code)}
            className={cn(
                'flex items-center justify-between px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer',
                currentLang === code && 'bg-neutral-100 dark:bg-neutral-800'
            )}
        >
            <span className='text-base text-neutral-800 dark:text-neutral-200'>{t(`${code}`)}</span>
            <span className='text-sm text-neutral-500'>{code}</span>
        </div>
    );
};

export default function LangSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [open, setOpen] = useState(false)

    const isDesktop = useMediaQuery("(min-width: 768px)")
    const t = useTranslations('settings.lang')

    const handleChangeLang = (code: Locale) => {
        const path = pathname.replace(`/${locale}`, `/${code}`);
        router.replace(path);
    }

    return isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        'transition-all rounded-xl bg-neutral-300/60 hover:bg-neutral-300 dark:bg-neutral-700/60 dark:hover:bg-neutral-700',
                    )}
                >
                    {locale}
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] p-5 !rounded-xl'>
                <DialogHeader>
                    <DialogTitle>{t('title')}</DialogTitle>
                    <DialogDescription>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {mockData.map((item, index) => (
                        <LanguageItem key={index} code={item.code} currentLang={locale} handleChangeLang={handleChangeLang} />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        'transition-all rounded-xl bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-700/50',
                    )}
                >
                    {locale}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>{t('title')}</DrawerTitle>
                    <DrawerDescription>
                        {t('description')}
                    </DrawerDescription>
                </DrawerHeader>
                <div className='px-5 pb-5'>
                    {mockData.map((item, index) => (
                        <LanguageItem
                            key={index}
                            code={item.code}
                            currentLang={locale}
                            handleChangeLang={handleChangeLang}
                        />
                    ))}
                </div>
            </DrawerContent>
        </Drawer>
    )
}