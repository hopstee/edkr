import ExperienceItem from '@/components/partials/experience';
import { Experience } from '@/shared/types/experience';

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