import { Experience } from '@/shared/types/experience';

interface ExperienceItemProps {
    experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
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
            <div>
                <h1 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                    {experience.position}
                </h1>
                <h4 className='text-neutral-700 dark:text-neutral-300'>
                    {`${experience.company} (${experience.period.start} - ${experience.period.finish})`}
                </h4>
                <ol className='list-disc ml-5 mt-3 text-base text-neutral-700 dark:text-neutral-300'>
                    {experience.description.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default function ExperiencesView({ experienceList }: { experienceList: Experience[] }) {
    return (
        <div className='py-8 md:py-16'>
            <div className='relative max-w-[700px] mx-auto pl-3'>
                <div className='absolute top-0 left-3 h-full border common-border border-solid rounded-full'>
                    <div className='absolute -top-2.5 -left-2.5 flex gap-3'>
                        <div
                            className='size-5 bg-neutral-100 dark:bg-neutral-900 rounded-full border-4 border-neutral-400 dark:border-neutral-500 border-solid'>
                        </div>
                        <div className='text-neutral-600 dark:text-neutral-400 text-sm'>
                            2024
                        </div>
                    </div>
                    <div className='absolute -bottom-2.5 -left-2.5 flex gap-3'>
                        <div
                            className='size-5 bg-neutral-100 dark:bg-neutral-900 rounded-full border-4 border-neutral-400 dark:border-neutral-500 border-solid'>
                        </div>
                        <div className='text-neutral-600 dark:text-neutral-400 text-sm'>
                            2019
                        </div>
                    </div>
                </div>
                <div className='py-16 space-y-16'>
                    {experienceList.map((experience: Experience, index: number) => (
                        <ExperienceItem experience={experience} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}