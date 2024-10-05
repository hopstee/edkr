'use client'

import useAuth from '@/hooks/useAuth';
import { Link } from '@/i18n/routing';
import { BriefcaseBusiness, Hammer, User } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import AdminButton from '../admin-button';
import LangSwitcher from '../lang-switcher';
import ThemeSwitcher from '../theme-switcher';

export default function Header() {
    const pathname = usePathname()
    const locale = useLocale()
    const t = useTranslations('navigation')

    const isLoggedIn = useAuth()

    const currentPath = pathname.replace(`/${locale}`, '')?.split('/')[1]

    return (
        <header className='sticky top-0 w-full p-5 z-50 max-w-[1220px] mx-auto'>
            <div className='p-3 rounded-xl common-bg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex'>
                            <span className='text-2xl'>✌️</span>
                            <div className='flex flex-col justify-start'>
                                <Link className='block text-violet-500 dark:text-yellow-500 text-2xl transition-colors' href='/'>
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
                                <p className='text-xs font-thin text-neutral-600 dark:text-neutral-200'>
                                    Available for work
                                </p>
                            </div>
                            <span className='text-xs'>/</span>
                            <p className='text-xs font-thin text-neutral-600 dark:text-neutral-200'>
                                Remote
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block transition-all'>
                        <nav aria-label='Global'>
                            <ul className='flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-200'>
                                <li>
                                    <Link
                                        href='/'
                                        className={twMerge(
                                            'nav-item transition-all hover:bg-neutral-400/15 px-3 rounded-lg min-w-20 h-12 flex flex-col items-center justify-center',
                                            !currentPath && 'common-contrast-bg text-violet-500 dark:text-yellow-500'
                                        )}
                                    >
                                        <User className='w-5 h-5' />
                                        <p className='text-xs font-light mt-1'>
                                            {t('home')}
                                        </p>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href='/experience'
                                        className={twMerge(
                                            'nav-item transition-all hover:bg-neutral-400/15 px-3 rounded-lg min-w-20 h-12 flex flex-col items-center justify-center',
                                            currentPath === 'experience' && 'common-contrast-bg text-violet-500 dark:text-yellow-500'
                                        )}
                                    >
                                        <BriefcaseBusiness className='w-5 h-5' />
                                        <p className='text-xs font-light mt-1'>
                                            {t('experience')}
                                        </p>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href='/projects'
                                        className={twMerge(
                                            'nav-item transition-all hover:bg-neutral-400/15 px-3 rounded-lg min-w-20 h-12 flex flex-col items-center justify-center',
                                            currentPath === 'projects' && 'common-contrast-bg text-violet-500 dark:text-yellow-500'
                                        )}
                                    >
                                        <Hammer className='w-5 h-5' />
                                        <p className='text-xs font-light mt-1'>
                                            {t('projects')}
                                        </p>
                                    </Link>
                                </li>
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
