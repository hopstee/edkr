import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const contacts = [
    {
        link: 'https://t.me/hopstee',
        icon: Send
    },
    {
        link: 'https://github.com/hopstee',
        icon: Github
    },
    {
        link: 'https://www.linkedin.com/in/eduard-krivovyashchuk-a182aa197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        icon: Linkedin
    },
]

export default function Contacts() {
    const t = useTranslations('buttons');

    return (
        <div className='max-w-[500px] mx-auto space-y-5'>
            <div className='flex flex-wrap justify-center gap-3'>
                {contacts.map((link, index) => (
                    <Link
                        key={index}
                        href={link.link}
                        target='_blank'
                    >
                        <Button
                            size='icon'
                            className='rounded-xl common-bg hover:bg-neutral-400/15 text-neutral-600 dark:text-neutral-200 w-12 h-12'
                        >
                            <link.icon className='size-5' />
                        </Button>
                    </Link>
                ))}
                <Link href='mailto:hopsteee@gmail.com' target='_blank'>
                    <Button
                        size='default'
                        className='rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-12'
                    >
                        <Mail className='size-5 mr-2' />
                        {t('contactMe')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}