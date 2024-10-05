'use client'

import { Link } from '@/i18n/routing';
import { useEffect } from 'react';
import ExitButton from '../exit-button';
import LangSwitcher from '../lang-switcher';
import ThemeSwitcher from '../theme-switcher';

export default function DashboardHeader() {

    useEffect(() => {
        fetch('/api/protected')
    }, [])

    return (
        <header className='w-full border-b border-neutral-200 dark:border-neutral-800'>
            <div className='p-3 bg-neutral-100 dark:bg-neutral-900'>
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
                    </div>

                    <div className='flex items-center gap-3'>
                        <LangSwitcher />
                        <ThemeSwitcher />
                        <ExitButton />
                    </div>
                </div>
            </div>
        </header >
    )
}