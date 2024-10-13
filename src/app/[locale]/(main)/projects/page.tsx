import { getLocalData } from "@/lib/getLocalData";
import { Project } from "@/shared/types/project";
import ProjectsView from "@/views/main/projects";
import { getLocale } from "next-intl/server";

export default async function ProjectsPage() {
    const locale = await getLocale();
    const projects: Project[] = await getLocalData("projects", locale);

    return <ProjectsView projects={projects} />
}