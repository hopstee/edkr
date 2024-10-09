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

import useMediaQuery from "@/hooks/useMediaQuery";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";

interface LanguageItem {
    id: number;
    code: Locale;
}

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
                'flex items-center justify-between px-4 py-2 hover:bg-timberwolf-mid dark:hover:bg-eerie-light rounded-md cursor-pointer',
                currentLang === code && 'bg-timberwolf-mid dark:bg-eerie-light'
            )}
        >
            <span className='text-base text-eerie dark:text-timberwolf'>{t(`${code}`)}</span>
            <span className='text-sm text-eerie-light/60 dark:text-timberwolf-light/60'>{code}</span>
        </div>
    );
};

export default function LangSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const locales = routing.locales

    const [open, setOpen] = useState(false)

    const isDesktop = useMediaQuery("(min-width: 768px)")
    const t = useTranslations('settings.lang')

    const handleChangeLang = (code: Locale) => {
        setOpen(false)
        router.replace(pathname, {
            locale: code,
            scroll: false,
        });
    }

    return isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        'transition-all rounded-xl bg-timberwolf-mid dark:bg-eerie-light/60 hover:bg-timberwolf-dark dark:hover:bg-eerie-light',
                    )}
                >
                    {locale}
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] px-0 !rounded-xl backdrop-blur-md bg-timberwolf-light dark:bg-eerie-mid-light border-2 border-timberwolf-dark dark:border-eerie-light'>
                <DialogHeader className='px-5'>
                    <DialogTitle className='text-eerie dark:text-timberwolf'>
                        {t('title')}
                    </DialogTitle>
                    <DialogDescription className='text-eerie-light/70 dark:text-timberwolf-light/60'>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className='max-h-96 px-5 flex flex-coll overflow-y-auto'>
                    <div className='space-y-2'>
                        {locales.map((item, index) => (
                            <LanguageItem key={index} code={item} currentLang={locale} handleChangeLang={handleChangeLang} />
                        ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        'transition-all rounded-xl bg-timberwolf-mid dark:bg-eerie-light/60 hover:bg-timberwolf-dark dark:hover:bg-eerie-light',
                    )}
                >
                    {locale}
                </Button>
            </DrawerTrigger>
            <DrawerContent className={cn(
                'rounded-t-xl bg-timberwolf-light dark:bg-eerie-mid-light border-t-2 border-timberwolf-dark dark:border-eerie-light',
                'mt-0 h-fit fixed bottom-0 left-0 right-0 outline-none'
            )}>
                <DrawerHeader className='text-left'>
                    <DrawerTitle className='text-eerie dark:text-timberwolf'>
                        {t('title')}
                    </DrawerTitle>
                    <DrawerDescription className='text-eerie-light/70 dark:text-timberwolf-light/60'>
                        {t('description')}
                    </DrawerDescription>
                </DrawerHeader>
                <ScrollArea className='max-h-96 flex flex-coll overflow-y-auto'>
                    <div className='px-5 pb-5 space-y-2'>
                        {locales.map((item, index) => (
                            <LanguageItem
                                key={index}
                                code={item}
                                currentLang={locale}
                                handleChangeLang={handleChangeLang}
                            />
                        ))}
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}