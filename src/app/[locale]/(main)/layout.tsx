import BottomBar from "@/components/partials/bottombar";
import Header from "@/components/partials/header";

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className='relative min-h-screen w-full'>
            <Header />
            <div className='min-h-full overflow-y-auto'>
                <div className='max-w-[1220px] mx-auto min-h-full px-5 text-neutral-900 dark:text-neutral-100'>
                    <div className='pb-16 md:pb-5'>
                        <main className='pb-8 md:pb-0'>
                            {children}
                        </main>
                    </div>
                </div>
            </div>

            <BottomBar />
        </div>
    );
}