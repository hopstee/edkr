export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className='relative min-h-screen w-full p-5 flex items-center justify-center'>
            <div className='flex-1 max-w-[400px]'>
                {children}
            </div>
        </div>
    );
}