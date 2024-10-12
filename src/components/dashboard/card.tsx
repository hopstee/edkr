export function DashboardCard({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='bg-main-light dark:bg-alter-mid-light rounded-xl'>
            {children}
        </div>
    )
}

export function DashboardCardHeader({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='w-full border-b-2 border-main-dark dark:border-alter-light px-4 py-3'>
            {children}
        </div>
    )
}

export function DashboardCardContent({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='p-5'>
            {children}
        </div>
    )
}