import ThemeSwitcher from "@/components/partials/theme-switcher";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='relative min-h-screen w-full p-5 flex items-center justify-center'>
            <div className='absolute top-5 right-5'>
                <ThemeSwitcher />
            </div>
            <div className='flex-1 max-w-[400px]'>
                {children}
            </div>
        </div>
    );
}