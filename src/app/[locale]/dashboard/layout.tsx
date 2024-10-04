import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='min-h-screen w-full'>
            <ResizablePanelGroup
                direction='horizontal'
                className='h-screen max-w-md rounded-lg md:min-w-[450px]'
            >
                <ResizablePanel defaultSize={25}>
                    <div className='flex h-full items-center justify-center p-6'>
                        <span className='font-semibold'>Sidebar</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75}>
                    <div className='flex h-full items-center justify-center p-6'>
                        {children}
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}