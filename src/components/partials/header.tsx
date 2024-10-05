'use client'

import useAuth from '@/hooks/useAuth';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { links } from '@/shared/constants/nav-links';
import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { } from 'next/navigation';
import AdminButton from './admin-button';
import LangSwitcher from './lang-switcher';
import ThemeSwitcher from './theme-switcher';

export default function Header() {
    const pathname = usePathname()
    const t = useTranslations('navigation')

    const isLoggedIn = useAuth()

    const currentPath = pathname?.split('/')[1]

    return (
        <header className='sticky top-0 w-full p-2 md:p-5 z-50 max-w-[1220px] mx-auto'>
            <div className='p-3 rounded-xl backdrop-blur-md bg-timberwolf-dark/60 dark:bg-eerie-light/60 border-4 border-timberwolf-dark dark:border-eerie-light'>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex'>
                            <span className='text-2xl'>✌️</span>
                            <div className='flex flex-col justify-start'>
                                <Link className='block text-ochre text-2xl font-semibold transition-colors' href='/'>
                                    <span className='sr-only'>Home</span>
                                    edkr.
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center space-x-1 ml-1 mt-1'>
                            <div className='flex items-center'>
                                <span className='relative flex size-2 mr-2'>
                                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                                    <span className='relative inline-flex rounded-full size-2 bg-green-500'></span>
                                </span>
                                <p className='text-xs font-thin'>
                                    Available for work
                                </p>
                            </div>
                            <span className='text-xs'>/</span>
                            <p className='text-xs font-thin'>
                                Remote
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block transition-all'>
                        <nav aria-label='Global'>
                            <ul className='flex items-center gap-3 text-sm'>
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'nav-item transition-all hover:bg-timberwolf-dark dark:hover:bg-eerie-light px-3 rounded-lg min-w-20 h-12 flex flex-col items-center justify-center',
                                                currentPath === link.path && 'bg-timberwolf-dark dark:bg-eerie-light text-ochre dark:text-ochre'
                                            )}
                                        >
                                            <User className='w-5 h-5' />
                                            <p className='text-xs font-light mt-1'>
                                                {t(link.label)}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className='flex items-center gap-3'>
                        <LangSwitcher />
                        <ThemeSwitcher />
                        {isLoggedIn && <AdminButton />}
                    </div>
                </div>
            </div>
        </header >
    )
}
