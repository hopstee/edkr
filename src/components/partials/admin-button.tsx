import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LayoutDashboard, LogOut, Shield } from "lucide-react";

export default function AdminButton() {
    const router = useRouter();
    const pathname = usePathname();

    const handleSignOut = async () => {
        await fetch('/api/logout', { method: 'POST', credentials: 'include' })
        router.push(pathname);
    }

    return (
        <Menubar className='bg-transparent shadow-none p-0 border-none space-x-0'>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Button
                        variant='ghost'
                        size='icon'
                        className={cn(
                            'bg-green-500/20 dark:bg-green-700/30 hover:bg-green-500/30 dark:hover:bg-green-700/40',
                            'data-[state=open]:bg-green-500/30 focus:bg-green-500/30 dark:data-[state=open]:bg-green-700/40 dark:focus:bg-green-700/40',
                            'rounded-xl cursor-pointer',
                        )}
                    >
                        <Shield className='w-4 h-4 text-green-600' />
                    </Button>
                </MenubarTrigger>
                <MenubarContent align='end' className='bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl'>
                    <MenubarItem className='rounded-lg hover:bg-neutral-300/40 dark:hover:bg-neutral-700/40'>
                        <Link href='/dashboard' className='w-full flex items-center'>
                            <LayoutDashboard className='w-4 h-4 mr-2' />
                            Dashboard
                        </Link>
                    </MenubarItem>
                    <MenubarItem
                        onClick={() => {
                            handleSignOut()
                        }}
                        className='cursor-pointer text-red-600 focus:bg-red-400/30 focus:text-red-500 dark:hover:bg-red-700/40 rounded-lg'
                    >
                        <LogOut className='w-4 h-4 mr-2' />
                        Logout
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild className='!focus-visible:ring-0'>
        //         <Button
        //             variant='ghost'
        //             size='icon'
        //             className='bg-green-500/20 dark:bg-green-700/30 hover:bg-green-500/30 dark:hover:bg-green-700/40 rounded-xl'
        //         >
        //             <Shield className='w-4 h-4 text-green-600' />
        //         </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent>
        //         <DropdownMenuItem>
        //             <Link href='/dashboard' className='w-full flex items-center'>
        //                 <LayoutDashboard className='w-4 h-4 mr-2' />
        //                 Dashboard
        //             </Link>
        //         </DropdownMenuItem>
        //         <DropdownMenuItem
        //             onClick={() => {
        //                 handleSignOut()
        //             }}
        //             className='cursor-pointer text-red-500 hover:text-red-500 hover:bg-red-500/30 dark:hover:bg-red-700/40'
        //         >
        //             <LogOut className='w-4 h-4 mr-2' />
        //             Logout
        //         </DropdownMenuItem>
        //     </DropdownMenuContent>
        // </DropdownMenu>
    )
}