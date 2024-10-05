'use client'

import DashboardHeader from "@/components/partials/dashboard-header";
import Nav from "@/components/partials/nav";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Archive, ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react";
import { useState } from "react";

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
                                        title: 'Inbox',
                                        icon: Inbox,
                                        href: '/dashboard',
                                        path: '',
                                        variant: 'ghost',
                                    },
                                    {
                                        title: 'Drafts',
                                        icon: File,
                                        href: '/dashboard/drafts',
                                        path: 'drafts',
                                        variant: 'ghost',
                                    },
                                    {
                                        title: 'Sent',
                                        icon: Send,
                                        href: '/dashboard/sent',
                                        path: 'sent',
                                        variant: 'ghost',
                                    },
                                    {
                                        title: 'Junk',
                                        icon: ArchiveX,
                                        href: '/dashboard/junk',
                                        path: 'junk',
                                        variant: 'ghost',
                                    },
                                    {
                                        title: 'Trash',
                                        icon: Trash2,
                                        href: '/dashboard/trash',
                                        path: 'trash',
                                        variant: 'ghost',
                                    },
                                    {
                                        title: 'Archive',
                                        icon: Archive,
                                        href: '/dashboard/archive',
                                        path: 'archive',
                                        variant: 'ghost',
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