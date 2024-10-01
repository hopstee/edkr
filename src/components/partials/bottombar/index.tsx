'use client'

import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { BriefcaseBusiness, Folders, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomBar() {
    const pathname = usePathname()

    return (
        <div className='fixed bottom-0 w-full p-5 z-50 block md:hidden'>
            <div className='p-1 rounded-xl common-bg !backdrop-blur-3xl shadow-md shadow-neutral-900/10'>
                <div className='w-full flex space-x-5 text-neutral-900 dark:text-white'>
                    <Link
                        href='/'
                        className={cn(
                            'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                            pathname.includes('/') && 'common-contrast-bg'
                        )}
                    >
                        <User className='w-5 h-5' />
                        <p className='text-xs font-light mt-1'>
                            About
                        </p>
                    </Link>
                    <Link
                        href='/careers'
                        className={cn(
                            'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                            pathname.includes('/careers') && 'common-contrast-bg'
                        )}
                    >
                        <BriefcaseBusiness className='w-5 h-5' />
                        <p className='text-xs font-light mt-1'>
                            Careers
                        </p>
                    </Link>
                    <Link
                        href='/projects'
                        className={cn(
                            'nav-item w-1/3 h-12 flex flex-col items-center justify-center rounded-lg',
                            pathname.includes('/projects') && 'common-contrast-bg'
                        )}
                    >
                        <Folders className='w-5 h-5' />
                        <p className='text-xs font-light mt-1'>
                            Projects
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}