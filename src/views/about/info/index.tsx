import { cn } from '@/lib/utils';
import Image from 'next/image';
import Contacts from '../contacts';

export default function Info() {
    return (
        <div className='max-w-[800px] mx-auto'>
            <div className='flex items-center max-md:flex-col max-md:space-y-8 md:space-x-16 '>
                <div className='flex flex-col items-center'>
                    <div className='relative size-32 md:size-64 bg-timberwolf-mid dark:bg-eerie-mid rounded-full border-2 border-timberwolf-dark dark:border-eerie-light'>
                        <Image
                            src='/assets/images/photo-1.jpg'
                            alt='Edik Krivovyaschuk photo'
                            fill
                            className='rounded-full object-cover object-center'
                        />
                        <div className='absolute -top-5 md:top-3 right-0 translate-x-1/4'>
                            <div className={cn(
                                'backdrop-blur-md bg-timberwolf-mid/60 dark:bg-eerie-mid/60 py-2 px-2 rounded-xl text-sm max-w-[150px] text-center',
                                'border-2 border-timberwolf-dark dark:border-eerie-light'
                            )}>
                                👨‍💻 work hard
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl md:text-5xl font-bold text-center'>
                        👋 Hey, I&apos;m Edik
                    </h1>
                    <div className='flex space-x-5 mt-3 justify-center'>
                        <div className='bg-timberwolf-mid-light dark:bg-eerie-mid-light px-3 py-1 mt-2 rounded-full w-fit'>
                            <p className='text-xs font-light text-eerie dark:text-timberwolf'>
                                Back-end
                            </p>
                        </div>
                        <div className='bg-timberwolf-mid-light dark:bg-eerie-mid-light px-3 py-1 mt-2 rounded-full w-fit'>
                            <p className='text-xs font-light text-eerie dark:text-timberwolf'>
                                Front-end
                            </p>
                        </div>
                    </div>
                    <p className='mt-5 text-sm md:text-base font-normal leading-6 text-center'>
                        Experienced fullstack developer with over 5 years of experience in building products using modern
                        technologies (NextJS, NodeJS, PostgreSQL, Blockchain, etc.). I have a proven ability to quickly
                        master new fields, including blockchain and frontend development. Effective both as an individual
                        contributor and a team member.
                    </p>
                </div>
            </div>

            <div className='mt-8'>
                <Contacts />
            </div>
        </div>
    )
}