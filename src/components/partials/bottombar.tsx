'use client'

import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { links } from '@/shared/constants/nav-links';
import { useTranslations } from 'next-intl';

export default function BottomBar() {
    const pathname = usePathname()
    const t = useTranslations('navigation')

    const currentPath = pathname.split('/')[1]

    return (
        <div className='fixed bottom-0 w-full p-2 md:p-5 z-50 block md:hidden'>
            <div className='p-1 rounded-xl backdrop-blur-xl bg-timberwolf-mid-light/90 dark:bg-eerie-mid-light/90 shadow-md shadow-eerie-dark/20 dark:shadow-eerie-dark/80'>
                <div className='w-full flex space-x-5'>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={cn(
                                'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                                currentPath === link.path && 'bg-timberwolf dark:bg-eerie-light text-ochre dark:text-ochre'
                            )}
                        >
                            <link.icon className='w-5 h-5' />
                            <p className='text-xs font-normal mt-1'>
                                {t(link.label)}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}