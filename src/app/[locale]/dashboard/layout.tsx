import DashboardContent from "@/components/partials/dashboard-content";
import DashboardHeader from "@/components/partials/dashboard-header";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <TooltipProvider delayDuration={0}>
            <div className='h-screen'>
                <DashboardHeader />
                <div className='h-[calc(100%-66px)] overflow-hidden'>
                    <DashboardContent
                        navCollapsedSize={4}
                    >
                        {children}
                    </DashboardContent>
                </div>
            </div>
        </TooltipProvider>
    )
}