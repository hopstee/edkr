'use client'

import { BriefcaseBusiness, Folders, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function BottomBar() {
    const pathname = usePathname()

    return (
        <div className='fixed bottom-0 w-full p-5 z-50 block md:hidden'>
            <div className='p-1 rounded-xl common-bg !backdrop-blur-3xl'>
                <div className='w-full flex space-x-5 text-neutral-900 dark:text-white'>
                    <Link
                        href='/'
                        className={twMerge(
                            'nav-item w-1/3 h-10 flex flex-col items-center justify-center rounded-lg',
                            pathname === '/' && 'common-contrast-bg'
                        )}
                    >
                        <User className='w-5 h-5' />
                        {/* <p className='text-sm font-light'> */}
                        {/* About */}
                        {/* </p> */}
                    </Link>
                    <Link
                        href='/careers'
                        className={twMerge(
                            'nav-item w-1/3 h-10 flex flex-col items-center justify-center rounded-lg',
                            pathname === '/careers' && 'common-contrast-bg'
                        )}
                    >
                        <BriefcaseBusiness className='w-5 h-5' />
                        {/* <p className='text-sm font-light'>
                            Careers
                        </p> */}
                    </Link>
                    <Link
                        href='/projects'
                        className={twMerge(
                            'nav-item w-1/3 h-10 flex flex-col items-center justify-center rounded-lg',
                            pathname === '/projects' && 'common-contrast-bg'
                        )}
                    >
                        <Folders className='w-5 h-5' />
                        {/* <p className='text-sm font-light'>
                            Projects
                        </p> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}