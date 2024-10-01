'use client'

import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { BriefcaseBusiness, Hammer, User } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function BottomBar() {
    const pathname = usePathname()
    const locale = useLocale()
    const t = useTranslations('navigation')

    const currentPath = pathname.replace(`/${locale}`, '').split('/')[1]

    return (
        <div className='fixed bottom-0 w-full p-5 z-50 block md:hidden'>
            <div className='p-1 rounded-xl common-bg !backdrop-blur-3xl shadow-md shadow-neutral-900/10'>
                <div className='w-full flex space-x-5 text-neutral-700 dark:text-neutral-200'>
                    <Link
                        href='/'
                        className={cn(
                            'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                            !currentPath && 'common-contrast-bg text-violet-500 dark:text-yellow-500'
                        )}
                    >
                        <User className='w-5 h-5' />
                        <p className='text-xs font-light mt-1'>
                            {t('home')}
                        </p>
                    </Link>
                    <Link
                        href='/careers'
                        className={cn(
                            'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                            currentPath === 'careers' && 'common-contrast-bg text-violet-500 dark:text-yellow-500'
                        )}
                    >
                        <BriefcaseBusiness className='w-5 h-5' />
                        <p className='text-xs font-light mt-1'>
                            {t('careers')}
                        </p>
                    </Link>
                    <Link
                        href='/projects'
                        className={cn(
                            'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                            currentPath === 'projects' && 'common-contrast-bg text-violet-500 dark:text-yellow-500'
                        )}
                    >
                        <Hammer className='w-5 h-5' />
                        <p className='text-xs font-light mt-1'>
                            {t('projects')}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}