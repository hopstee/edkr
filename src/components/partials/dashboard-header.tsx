'use client'

import { Link } from '@/i18n/routing';
import { useEffect } from 'react';
import ExitButton from './exit-button';
import LangSwitcher from './lang-switcher';
import ThemeSwitcher from './theme-switcher';

export default function DashboardHeader() {

    useEffect(() => {
        fetch('/api/protected')
    }, [])

    return (
        <header className='w-full border-b-2 border-timberwolf-dark dark:border-eerie-light'>
            <div className='p-3 bg-timberwolf-light dark:bg-eerie-mid-light'>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex'>
                            <span className='text-2xl'>✌️</span>
                            <div className='flex flex-col justify-start'>
                                <Link className='block text-ochre text-2xl transition-colors' href='/'>
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