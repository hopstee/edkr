import BottomBar from "@/components/partials/bottombar";
import Header from "@/components/partials/header";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='relativew-full min-h-screen flex flex-col'>
            <Header />
            <div className='flex-grow overflow-y-auto'>
                <div className='min-h-full w-full'>
                    <div className='w-full max-w-[1220px] min-h-full px-5 mx-auto text-neutral-900 dark:text-neutral-100'>
                        <div className='flex-1 pb-16 md:pb-5'>
                            <main className='pb-8 md:pb-0'>
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>

            <BottomBar />
        </div>
    );
}