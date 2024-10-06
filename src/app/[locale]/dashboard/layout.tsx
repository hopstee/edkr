'use client'

import DashboardHeader from "@/components/partials/dashboard-header";
import Nav from "@/components/partials/nav";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Briefcase, Hammer, Layers, User } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <TooltipProvider delayDuration={0}>
            <div className='h-screen'>
                <DashboardHeader />
                <div className='h-[calc(100%-66px)] overflow-hidden'>
                    <ResizablePanelGroup
                        direction='horizontal'
                        className='flex w-full data-[panel-group-direction=vertical]:flex-col h-full items-stretch'
                    >
                        <ResizablePanel
                            defaultSize={isDesktop ? 20 : 2}
                            collapsible={true}
                            collapsedSize={2}
                            minSize={isDesktop ? 15 : 2}
                            maxSize={isDesktop ? 20 : 2}
                            onCollapse={() => setIsCollapsed(true)}
                            onResize={() => setIsCollapsed(false)}
                            className={cn(
                                isCollapsed && 'min-w-[50px]',
                                'bg-timberwolf-light dark:bg-eerie-dark',
                                'max-md:border-r-2 max-md:border-timberwolf-dark max-md:dark:border-eerie-light'
                            )}
                        >
                            <Nav
                                isCollapsed={isCollapsed}
                                links={[
                                    {
                                        title: 'Personal data',
                                        icon: User,
                                        href: '/dashboard',
                                        path: '',
                                    },
                                    {
                                        title: 'Stack',
                                        icon: Layers,
                                        href: '/dashboard/stack',
                                        path: 'stack',
                                    },
                                    {
                                        title: 'Experience',
                                        icon: Briefcase,
                                        href: '/dashboard/experience',
                                        path: 'experience',
                                    },
                                    {
                                        title: 'Projects',
                                        icon: Hammer,
                                        href: '/dashboard/projects',
                                        path: 'projects',
                                    },
                                ]}
                            />
                        </ResizablePanel>
                        {isDesktop && <ResizableHandle
                            withHandle
                            className='bg-timberwolf-dark dark:bg-eerie-light w-0.5'
                        />}
                        <ResizablePanel defaultSize={80}>
                            <div className='flex h-full items-center justify-center p-6'>
                                {children}
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>
        </TooltipProvider>
    )
}