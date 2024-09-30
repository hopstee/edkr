import { Project, TechStack } from "@/shared/types/project";
import { ArrowUpRight } from "lucide-react";

export default function ProjectItem({ project }: { project: Project }) {
    return (
        <div className="flex flex-col common-bg rounded-xl overflow-hidden">
            <div className="w-full">
                <img src={project.image} />
            </div>
            <div className="flex flex-1 flex-col justify-between p-3 rounded-b-xl">
                <div>
                    <h3 className="text-lg font-semibold">
                        {project.title}
                    </h3>
                    {project.techstack.map((item: TechStack, index: number) => (
                        <div key={index} className="text-sm mt-3">
                            <h4 className="font-semibold">{item.title}:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {item.items.map((tech: string, index: number) => (
                                    <div key={index} className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                        <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                            {tech}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <a href={project.link} target="_blank"
                    className="bg-blue-400/20 text-blue-500 hover:underline px-3 py-1 flex items-center justify-end mt-3 ml-auto w-fit rounded-full text-sm">
                    {project.link}
                    <ArrowUpRight className="size-4 ml-1" />
                </a>
            </div>
        </div>
    )
}