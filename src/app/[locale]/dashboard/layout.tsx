'use client'

import DashboardHeader from "@/components/partials/dashboard-header";
import Nav from "@/components/partials/nav";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Briefcase, Hammer, Layers, User } from "lucide-react";
import { useState } from "react";

// #0C0C0C

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <TooltipProvider delayDuration={0}>
            <div className='h-screen'>
                <DashboardHeader />
                <div className='max-md:flex hidden h-screen w-full items-center justify-center' >
                    No content
                </div>
                <div className='h-[calc(100%-65px)] overflow-hidden md:block hidden'>
                    <ResizablePanelGroup
                        direction='horizontal'
                        className='flex w-full data-[panel-group-direction=vertical]:flex-col h-full items-stretch'
                    >
                        <ResizablePanel
                            defaultSize={20}
                            collapsible={true}
                            collapsedSize={2}
                            minSize={15}
                            maxSize={20}
                            onCollapse={() => setIsCollapsed(true)}
                            onResize={() => setIsCollapsed(false)}
                            className={cn(isCollapsed && 'min-w-[50px]', 'bg-neutral-100 dark:bg-neutral-900')}
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
                        <ResizableHandle withHandle />
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