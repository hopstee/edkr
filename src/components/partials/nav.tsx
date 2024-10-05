'use client'

import { buttonVariants } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

interface NavProps {
    isCollapsed: boolean
    links: {
        title: string
        href: string
        path: string
        icon: LucideIcon
    }[]
}

export default function Nav({ isCollapsed, links }: NavProps) {
    const pathname = usePathname()
    const locale = useLocale()

    const currentPath = pathname.replace(`/${locale}`, '')?.split('/')[2] || ''

    return (
        <div
            data-collapsed={isCollapsed}
            className='group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2'
        >
            <nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
                {links.map((link, index) =>
                    isCollapsed ? (
                        <Tooltip key={index} delayDuration={0}>
                            <TooltipTrigger asChild>
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={cn(
                                        buttonVariants({ variant: 'ghost', size: "icon" }),
                                        "h-9 w-9",
                                        "dark:hover:bg-muted dark:hover:text-white",
                                        "hover:bg-neutral-200 hover:text-neutral-900",
                                        currentPath === link.path && "dark:bg-muted dark:text-muted-foreground bg-neutral-200 text-neutral-500"
                                    )}
                                >
                                    <link.icon className='h-4 w-4' />
                                    <span className='sr-only'>{link.title}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right' className='flex items-center gap-4 rounded-lg'>
                                {link.title}
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        <Link
                            key={index}
                            href={link.href}
                            className={cn(
                                buttonVariants({ variant: 'ghost', size: "sm" }),
                                "dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                "text-neutral-900 hover:bg-neutral-200 hover:text-neutral-900",
                                "justify-start",
                                currentPath === link.path && "dark:bg-muted dark:text-white bg-neutral-200 text-neutral-900"
                            )}
                        >
                            <link.icon className='mr-2 h-4 w-4' />
                            {link.title}
                        </Link>
                    )
                )}
            </nav>
        </div >
    )
}