'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={cn(
                'rounded-xl',
                theme === 'light' && 'bg-blue-300/30 hover:bg-blue-400/30',
                theme === 'dark' && 'bg-orange-900/30 hover:bg-orange-700/30',
            )}
        >
            {theme === 'light' ? <Moon className='h-4 w-4 text-blue-400' /> : <Sun className='h-4 w-4 text-orange-400' />}
        </Button>
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild>
        //         <Button
        //             variant='ghost'
        //             size='icon'
        //             className={cn(
        //                 'transition-all rounded-xl',
        //                 theme === 'light' && 'bg-orange-200/50 hover:bg-orange-300/50',
        //                 theme === 'dark' && 'bg-blue-900/30 hover:bg-blue-700/30',
        //                 theme === 'system' && 'bg-neutral-200/60 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600'
        //             )}
        //         >
        //             <span className='transition-all duration-300 ease-in-out'>
        //                 {theme === 'light' && <Sun className='h-4 w-4 text-orange-400' />}
        //                 {theme === 'dark' && <Moon className='h-4 w-4 text-blue-400' />}
        //                 {theme === 'system' && <Laptop className='h-4 w-4 text-gray-500 dark:text-gray-400' />}
        //             </span>
        //         </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent className='bg-neutral-100 dark:bg-neutral-900 rounded-xl' align='end'>
        //         <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
        //             <DropdownMenuRadioItem value='light' className='hover:bg-neutral-200 dark:hover:bg-neutral-700'>Light</DropdownMenuRadioItem>
        //             <DropdownMenuRadioItem value='dark' className='hover:bg-neutral-200 dark:hover:bg-neutral-700'>Dark</DropdownMenuRadioItem>
        //             <DropdownMenuRadioItem value='system' className='hover:bg-neutral-200 dark:hover:bg-neutral-700'>System</DropdownMenuRadioItem>
        //         </DropdownMenuRadioGroup>
        //     </DropdownMenuContent>
        // </DropdownMenu>
    );
}
