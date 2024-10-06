import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Project, TechStack } from "@/shared/types/project";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className='flex flex-col backdrop-blur-md bg-timberwolf-light dark:bg-eerie-mid-light rounded-xl overflow-hidden'>
            <div className='w-full'>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover'
                    />
                </AspectRatio>
            </div>
            <div className='flex flex-1 flex-col justify-between p-3 rounded-b-xl border-2 border-t-0 border-timberwolf-dark dark:border-eerie-light'>
                <div>
                    <h3 className='text-lg font-bold'>
                        {project.title}
                    </h3>
                    {project.techstack.map((item: TechStack, index: number) => (
                        <div key={index} className='text-sm mt-3'>
                            <h4 className='font-semibold'>{item.title}:</h4>
                            <div className='flex flex-wrap gap-1 mt-1'>
                                {item.items.map((tech: string, index: number) => (
                                    <div key={index} className='bg-timberwolf-mid-light dark:bg-eerie-light px-3 py-1 rounded-full w-fit'>
                                        <p className='text-xs font-normal text-eerie/70 dark:text-timberwolf/70'>
                                            {tech}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <a href={project.link} target='_blank' rel='noopener noreferrer'
                    className='bg-moonstone-light/20 text-moonstone-dark hover:underline px-3 py-1 flex items-center justify-end mt-3 ml-auto w-fit rounded-full text-sm'>
                    {project.link}
                    <ArrowUpRight className='size-4 ml-1' />
                </a>
            </div>
        </div>
    );
}

export default function ProjectsView({ projects }: { projects: Project[] }) {
    return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 max-md:pt-3'>
            {projects.map((project: Project, index: number) => (
                <ProjectItem project={project} key={index} />
            ))}
        </div>
    )
}