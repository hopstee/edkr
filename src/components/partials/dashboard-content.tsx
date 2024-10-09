'use client'

import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Briefcase, Hammer, Layers, User } from "lucide-react";
import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import Nav from "./nav";

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
                minSize={20}
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
                    'relative bg-timberwolf-light dark:bg-eerie-mid-light',
                    'max-md:border-r-2 max-md:border-timberwolf-dark max-md:dark:border-eerie-light'
                )}
            >

                <Nav
                    isCollapsed={isCollapsed || !isDesktop}
                    links={[
                        {
                            title: 'Personal data',
                            icon: User,
                            href: '/dashboard',
                            path: '',
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
                className='bg-timberwolf-dark dark:bg-eerie-light w-0.5'
            />}
            <ResizablePanel defaultSize={layout[1]} minSize={50}>
                <div className='flex h-full items-center justify-center p-6'>
                    {children}
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}