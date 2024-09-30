import { Career } from '@/shared/types/career';

export default function CareerItem({ career }: { career: Career }) {
    return (
        <div className='relative w-full pl-8'>
            <div className='flex items-center absolute top-3 -left-[5px] -translate-y-1/2'>
                <div
                    className='size-3 bg-neutral-100 dark:bg-neutral-900 rounded-full border-2 border-neutral-400 dark:border-neutral-500 border-solid z-10'>
                </div>
                <div
                    className='w-5 border border-neutral-400 dark:border-neutral-500 border-solid rounded-r-full -ml-1'>
                </div>
            </div>
            <div className=''>
                <h1 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                    {career.position}
                </h1>
                <h4 className='text-neutral-700 dark:text-neutral-300'>
                    {`${career.company} (${career.period.start} - ${career.period.finish})`}
                </h4>
                <ol className='list-disc ml-5 mt-3 text-base text-neutral-700 dark:text-neutral-300'>
                    {career.description.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}