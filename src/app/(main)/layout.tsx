import BottomBar from "@/components/bottombar";
import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="h-full w-full bg-neutral-100 dark:bg-neutral-900 bg-[radial-gradient(#7171714f_1px,transparent_1px)] dark:bg-[radial-gradient(#b0b0b04f_1px,transparent_1px)] [background-size:20px_20px] transition-all">
                {/* <div className="h-full w-full overflow-y-scroll"> */}
                <ScrollArea className="h-full">
                    <div className="flex flex-col flex-1 max-w-[1220px] min-h-full px-5 mx-auto text-neutral-900 dark:text-neutral-100">
                        <Header />
                        <div className="flex-1 pb-16 md:pb-5">
                            <main className="h-full pb-8 md:pb-0">
                                {children}
                            </main>
                        </div>
                    </div>
                </ScrollArea>
                {/* </div> */}
            </div>

            <BottomBar />
        </div>
    );
}