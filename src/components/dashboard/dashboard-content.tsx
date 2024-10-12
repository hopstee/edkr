'use client'

import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Briefcase, Hammer, Info, Layers, User } from "lucide-react";
import { useState } from "react";
import Nav from "../partials/nav";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { ScrollArea } from "../ui/scroll-area";

interface DashboardLayoutProps {
    children: React.ReactNode;
    navCollapsedSize?: number;
}

export default function DashboardContent({
    children,
    navCollapsedSize,
}: DashboardLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem('SIDEBAR_COLLAPSED') === 'true')
    const [layout, setLayout] = useState<number[]>(localStorage.getItem('DASHBOARD_LAYOUT') ? JSON.parse(localStorage.getItem('DASHBOARD_LAYOUT')!) : [30, 70])

    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <ResizablePanelGroup
            direction='horizontal'
            onLayout={(sizes: number[]) => {
                localStorage.setItem('DASHBOARD_LAYOUT', JSON.stringify(sizes))
                setLayout(sizes)
            }}
        >
            <ResizablePanel
                defaultSize={layout[0]}
                collapsible={true}
                collapsedSize={navCollapsedSize}
                minSize={5}
                maxSize={50}
                onCollapse={() => {
                    setIsCollapsed(true)
                    localStorage.setItem('SIDEBAR_COLLAPSED', JSON.stringify(true))
                }}
                onResize={() => {
                    setIsCollapsed(false)
                    localStorage.setItem('SIDEBAR_COLLAPSED', JSON.stringify(false))
                }}
                className={cn(
                    (isCollapsed || !isDesktop) && 'min-w-[50px] max-w-[50px]',
                    !isCollapsed && isDesktop && 'min-w-[220px]',
                    'relative bg-main-light dark:bg-alter-mid-light',
                    'max-md:border-r-2 max-md:border-main-dark max-md:dark:border-alter-light'
                )}
            >

                <Nav
                    isCollapsed={isCollapsed || !isDesktop}
                    links={[
                        {
                            title: 'Common',
                            icon: Info,
                            href: '/dashboard',
                            path: '',
                            translation: 'dashboard.layout.sidebar.common'
                        },
                        {
                            title: 'Personal data',
                            icon: User,
                            href: '/dashboard/personal',
                            path: 'personal',
                            translation: 'dashboard.layout.sidebar.personalData'
                        },
                        {
                            title: 'Stack',
                            icon: Layers,
                            href: '/dashboard/stack',
                            path: 'stack',
                            translation: 'dashboard.layout.sidebar.stack'
                        },
                        {
                            title: 'Experience',
                            icon: Briefcase,
                            href: '/dashboard/experience',
                            path: 'experience',
                            translation: 'dashboard.layout.sidebar.experience'
                        },
                        {
                            title: 'Projects',
                            icon: Hammer,
                            href: '/dashboard/projects',
                            path: 'projects',
                            translation: 'dashboard.layout.sidebar.projects'
                        },
                    ]}
                />
            </ResizablePanel>
            {isDesktop && <ResizableHandle
                withHandle
                className='bg-main-dark dark:bg-alter-light w-0.5'
            />}
            <ResizablePanel defaultSize={layout[1]} minSize={50}>
                <ScrollArea className='h-full'>
                    <div className='min-h-full p-5'>
                        {children}
                    </div>
                </ScrollArea>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}