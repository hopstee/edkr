'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import ThemeSwitcher from '../theme-switcher';

export default function Header() {
    const pathname = usePathname()

    return (
        <header className='sticky top-0 w-full py-5 z-50'>
            <div className='p-3 rounded-xl common-bg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex'>
                            <span className='text-2xl'>✌️</span>
                            <div className='flex flex-col justify-start'>
                                <a className='block text-violet-500 dark:text-yellow-500 text-2xl transition-colors' href='/'>
                                    <span className='sr-only'>Home</span>
                                    edkr.
                                </a>
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
                            <ul className='flex items-center gap-6 text-sm'>
                                <li>
                                    <Link
                                        href='/'
                                        className={twMerge(
                                            'nav-item transition-all hover:bg-neutral-400/15 px-3 py-2 rounded-md',
                                            pathname === '/' && 'common-contrast-bg'
                                        )}
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href='/careers'
                                        className={twMerge(
                                            'nav-item transition-all hover:bg-neutral-400/15 px-3 py-2 rounded-md',
                                            pathname === '/careers' && 'common-contrast-bg'
                                        )}
                                    >
                                        Careers
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href='/projects'
                                        className={twMerge(
                                            'nav-item transition-all hover:bg-neutral-400/15 px-3 py-2 rounded-md',
                                            pathname === '/projects' && 'common-contrast-bg'
                                        )}
                                    >
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <ThemeSwitcher />
                </div>
            </div>
        </header >
    )
}