import ProjectItem from "@/components/project";
import { Project } from "@/types/project";

export default function ProjectsView({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {projects.map((project: Project, index: number) => (
                <ProjectItem project={project} key={index} />
            ))}
        </div>
    )
}